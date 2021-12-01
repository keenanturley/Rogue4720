import KeyListener from './KeyListener';
import Grid from './Grid';
import Player from './entities/Player';
import Enemy from './entities/Enemy';
import Weapon from './entities/Weapon';

enum State {
  WALKING,
  INVENTORY,
}

export default class Game {
  grid: Grid;

  private player: Player;

  private state: State;

  private keyListener: KeyListener;

  private message: string;

  constructor(grid: Grid) {
    this.grid = grid;
    this.player = this.grid.getPlayer();

    this.state = State.WALKING;

    this.keyListener = new KeyListener();
    this.keyListener.addListeners([
      // Move player with 'w', 'a', 's', 'd'
      ['w', () => this.movePlayer([0, -1])],
      ['a', () => this.movePlayer([-1, 0])],
      ['s', () => this.movePlayer([0, 1])],
      ['d', () => this.movePlayer([1, 0])],

      // Open/close inventory with 'i'
      ['i', () => this.toggleInventory()],

      // Select inventory weapon/item with '1'-'9'
      [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        ({ key }: KeyboardEvent) => this.selectFromInventory(Number(key) - 1),
      ],
    ]);
    this.keyListener.startListening();

    this.message = '';

    this.addMessage('Game Start');
    this.printGame();
  }

  stopGame(): void {
    this.keyListener.stopListening();
  }

  private movePlayer([deltaX, deltaY]: [number, number]): void {
    if (this.state !== State.WALKING) return;

    const { x: currentX, y: currentY } = this.grid.getPositionOf(this.player);
    const newPosition = {
      x: currentX + deltaX,
      y: currentY + deltaY,
    };

    const { entity, collision } = this.grid.query(newPosition);

    // Check for entities
    if (entity) {
      switch (entity.constructor) {
        case Enemy: {
          const enemy = <Enemy> entity;

          this.addMessage(`You bump into ${Game.nounPhrase(enemy)}`);

          break;
        }

        case Weapon: {
          const weapon = <Weapon> entity;

          this.player.pickUpWeapon(weapon);
          this.grid.removeEntity(weapon);
          this.addMessage(`You pick up ${Game.nounPhrase(weapon)}`);

          break;
        }

        default:
          break;
      }
    }

    // Check for collision
    if (!collision) {
      this.grid.moveEntity(this.player, newPosition);
    }

    this.printGame();
  }

  private toggleInventory(): void {
    if (this.state === State.INVENTORY) {
      // Close inventory
      this.state = State.WALKING;
    } else {
      // Open inventory
      this.addMessage('You look at your inventory');
      this.state = State.INVENTORY;
    }

    this.printGame();
  }

  private selectFromInventory(index: number): void {
    if (this.state !== State.INVENTORY) return;
    if (index >= this.player.inventory.weapons.length) return;

    const weapon = this.player.inventory.weapons[index];

    if (this.player.equippedWeapon === weapon) {
      this.addMessage(`You already have this ${weapon.name} equipped`);
      this.printGame();
      return;
    }

    this.player.equippedWeapon = weapon;
    this.addMessage(`You equip ${Game.nounPhrase(weapon)}`);
    this.printGame();
  }

  private addMessage(message: string): void {
    this.message += `"${message}"\n`;
  }

  private printGame(): void {
    /* eslint-disable no-console */
    // Grid
    console.log(this.grid.stringRepresentation());

    // Player stats
    console.log(this.player.stringRepresentation());

    if (this.player.equippedWeapon) {
      // Equpped weapon
      console.log('Equipped weapon:', this.player.equippedWeapon.stringRepresentation());
    }

    if (this.message) {
      // Message
      console.log(this.message);
      this.message = '';
    }

    if (this.state === State.INVENTORY) {
      // Inventory
      console.log(this.player.inventory.stringRepresentation());
    }
    /* eslint-enable no-console */
  }

  private static nounPhrase<Type extends { name: string }>(object: Type): string {
    if (Game.isVowel(object.name.charAt(0))) {
      return `an ${object.name}`;
    }
    return `a ${object.name}`;
  }

  private static isVowel(character: string): boolean {
    return 'aeiou'.split('').includes(character.charAt(0).toLowerCase());
  }
}
