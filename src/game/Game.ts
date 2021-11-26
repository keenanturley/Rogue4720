import KeyListener from './KeyListener';
import Map from './Map';
import Enemy from './entities/Enemy';
import Position from './Position';
import Weapon from './entities/Weapon';

enum State {
  WALKING,
  INVENTORY,
}

export default class Game {
  map: Map;

  private state: State;

  private keyListener: KeyListener;

  private message: string;

  constructor(map: Map) {
    this.map = map;

    this.state = State.WALKING;

    this.keyListener = new KeyListener();
    this.keyListener.addListeners([
      // Move player with 'w', 'a', 's', 'd'
      ['w', () => this.movePlayer([0, -1])],
      ['a', () => this.movePlayer([-1, 0])],
      ['s', () => this.movePlayer([0, 1])],
      ['d', () => this.movePlayer([1, 0])],

      // Browse inventory with 'i'
      ['i', () => this.toggleInventory()],
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
      x: this.map.player.position.x + deltaX,
      y: this.map.player.position.y + deltaY,
    };

    const { entity, collision } = this.map.query(newPosition);

    if (entity) {
      switch (entity.character) {
        case Enemy.character: {
          const { name } = <Enemy> entity;
          if (Game.isVowel(name.charAt(0))) {
            this.message += `"You bump into an ${name}"\n`;
          } else {
            this.message += `"You bump into a ${name}"\n`;
          }
          break;
        }
        case Weapon.character: {
          const { name } = <Weapon> entity;
          if (Game.isVowel(name.charAt(0))) {
            this.message += `"You pick up an ${name}"\n`;
          } else {
            this.message += `"You pick up a ${name}"\n`;
          }

          this.map.player.pickUpWeapon(<Weapon> entity);
          this.map.removeEntity(entity);
        }
          break;
        default:
          break;
      }
    }

    if (!collision) {
      this.map.moveEntity(this.map.player, newPosition);
    }

    // Print map when player tries to move
    this.printGame();
  }

  private toggleInventory(): void {
    if (this.state === State.INVENTORY) {
      this.state = State.WALKING;
    } else {
      this.message += '"You look at your inventory"\n';
      this.state = State.INVENTORY;
    }

    // Print map when inventory is toggled
    this.printGame();
  }

  private printGame(): void {
    /* eslint-disable no-console */
    // Print map
    console.log(this.map.stringRepresentation());

    // Print player information
    console.log(`HP: ${this.map.player.health}, SP: ${this.map.player.skill}`);

    if (this.map.player.equippedWeapon) {
      // Print player equpped weapon
      console.log('Equipped weapon:', this.map.player.equippedWeapon.stringRepresentation());
    }

    if (this.message !== '') {
      // Print message
      console.log(this.message);
      this.message = '';
    }

    if (this.state === State.INVENTORY) {
      // Print player inventory weapons
      if (this.map.player.inventory.weapons.length > 0) {
        console.log('weapons:',
          this.map.player.inventory.weapons
            .map((weapon, index) => `\n  ${index + 1}. ${weapon.stringRepresentation()}`)
            .join());
      } else {
        console.log('weapons: (no weapons)');
      }
    }
    /* eslint-enable no-console */
  }

  private static isVowel(character: string): boolean {
    return 'aeiou'.split('').includes(character.toLowerCase());
  }
}
