import Weapon from './entities/Weapon';

export default class Inventory {
  weapons: Weapon[];

  constructor() {
    this.weapons = [];
  }
}
