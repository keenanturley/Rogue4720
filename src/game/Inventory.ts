import Weapon from './entities/Weapon';

export default class Inventory {
  weapons: Weapon[];

  constructor() {
    this.weapons = [];
  }

  stringRepresentation(): string {
    if (this.weapons.length > 0) {
      return `weapons: ${
        this.weapons
          .map((weapon, index) => `\n  ${index + 1}. ${weapon.stringRepresentation()}`)
          .join()
      }`;
    }

    return 'weapons: (no weapons)';
  }
}
