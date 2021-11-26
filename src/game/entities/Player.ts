import Entity from './Entity';
import Weapon from './Weapon';
import Inventory from '../Inventory';

export default class Player extends Entity {
  static character: string = '@';

  static isCollidable: boolean = true;

  health: number;

  skill: number;

  inventory: Inventory;

  equippedWeapon: Weapon;

  constructor() {
    super(Player.character, Player.isCollidable);
    this.health = 20;
    this.skill = 0;
    this.inventory = new Inventory();
    this.equippedWeapon = null;
  }

  pickUpWeapon(weapon: Weapon) {
    this.inventory.weapons.push(weapon);

    if (!this.equippedWeapon) {
      this.equippedWeapon = weapon;
    }
  }
}
