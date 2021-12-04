import Weapon from './entities/Weapon';
import Entity from './entities/Entity';

export default class Inventory {
  weapons: Weapon[];
  inventory: Entity[];

  constructor() {
    this.weapons = [];
    this.inventory = [];
  }

  stringRepresentation(): string {
    // if (this.weapons.length > 0) {
    //   return `weapons: ${
    //     this.weapons
    //       .map((weapon, index) => `\n  ${index + 1}. ${weapon.stringRepresentation()}`)
    //       .join()
    //   }`;
    // }

    if (this.inventory.length > 0) {
      return `Inventory: ${
        this.inventory
          .map((item, index) => `\n  ${index + 1}. ${item.stringRepresentation()}`)
          .join()
      }`;
    }

    return 'weapons: (no weapons)';
  }
}
