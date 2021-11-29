import KeyListener from './KeyListener';
import Map from './Map';
import Player from './entities/Player';
import Enemy from './entities/Enemy';
import Position from './Position';
import Weapon from './entities/Weapon';

enum State {
  WALKING,
  INVENTORY,
}

export default class Game {
  map: Map;

  private player: Player;

  private state: State;

  private keyListener: KeyListener;

  private message: string;

  constructor(map: Map) {
    this.map = map;
    this.player = this.map.player;

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

    // Print map when game starts
    this.message = 'Game Start';
    this.printGame();
  }

  stopGame(): void {
    this.keyListener.stopListening();
  }

  private movePlayer([deltaX, deltaY]: [number, number]): void {
    if (this.state !== State.WALKING) return;

    const newPosition: Position = {
      x: this.player.position.x + deltaX,
      y: this.player.position.y + deltaY,
    };

    const { entity, collision } = this.map.query(newPosition);

    // Check for entities
    if (entity) {
      switch (entity.character) {
        case Enemy.character: {
          // Bump into enemy
          const enemy = <Enemy> entity;

          if (Game.isVowel(enemy.name.charAt(0))) {
            this.message += `"You bump into an ${enemy.name}"\n`;
          } else {
            this.message += `"You bump into a ${enemy.name}"\n`;
          }
          break;
        }
        case Weapon.character: {
          // Pick up weapon
          const weapon = <Weapon> entity;

          this.player.pickUpWeapon(weapon);
          this.map.removeEntity(weapon);

          if (Game.isVowel(weapon.name.charAt(0))) {
            this.message += `"You pick up an ${weapon.name}"\n`;
          } else {
            this.message += `"You pick up a ${weapon.name}"\n`;
          }
        }
          break;
        default:
          break;
      }
    }

    // Check for collision
    if (!collision) {
      this.map.moveEntity(this.player, newPosition);
    }

    // Print map when player tries to move
    this.printGame();
  }

  private toggleInventory(): void {
    if (this.state === State.INVENTORY) {
      // Close inventory
      this.state = State.WALKING;
    } else {
      // Open inventory
      this.message += '"You look at your inventory"\n';
      this.state = State.INVENTORY;
    }

    // Print map when inventory is toggled
    this.printGame();
  }

  private selectFromInventory(index: number): void {
    if (this.state !== State.INVENTORY) return;
    if (index >= this.player.inventory.weapons.length) return;

    const weapon = this.player.inventory.weapons[index];

    if (this.player.equippedWeapon === weapon) {
      this.message += `"You already have this ${weapon.name} equipped"\n`;
      this.printGame();
      return;
    }

    this.player.equippedWeapon = weapon;

    if (Game.isVowel(weapon.name.charAt(0))) {
      this.message += `"You equip an ${weapon.name}"\n`;
    } else {
      this.message += `"You equip a ${weapon.name}"\n`;
    }

    this.printGame();
  }

  private printGame(): void {
    /* eslint-disable no-console */
    // Print map
    console.log(this.map.stringRepresentation());

    // Print player information
    console.log(`HP: ${this.player.health}, SP: ${this.player.skill}`);

    if (this.player.equippedWeapon) {
      // Print player equpped weapon
      console.log('Equipped weapon:', this.player.equippedWeapon.stringRepresentation());
    }

    if (this.message !== '') {
      // Print and reset message string
      console.log(this.message);
      this.message = '';
    }

    if (this.state === State.INVENTORY) {
      // Print player inventory weapons
      console.log(this.player.inventory.stringRepresentation());
    }
    /* eslint-enable no-console */
  }

  private static isVowel(character: string): boolean {
    return 'aeiou'.split('').includes(character.toLowerCase());
  }
}
