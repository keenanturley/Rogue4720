import Entity from './Entity';
import Weapon from './Weapon';
import Item from './Item';
import Inventory from '../Inventory';
import Model from '../../renderer/Model';

const model = await Model.load('/assets/Player/model.json');

export default class Player extends Entity {
  static character: string = '@';

  static isCollidable: boolean = true;

  health: number;

  skill: number;

  inventory: Inventory;

  equippedWeapon: Weapon;
  // equippedWeapon: Entity;

  constructor() {
    super(model, Player.character, Player.isCollidable);
    this.health = 20;
    this.skill = 0;
    this.inventory = new Inventory();
    this.equippedWeapon = null;
  }

  pickUpWeapon(weapon: Weapon) {
    // this.inventory.weapons.push(weapon);
    this.inventory.inventory.push(weapon);

    if (!this.equippedWeapon) {
      this.equippedWeapon = weapon;
    }
  }

  stringRepresentation(): string {
    let string = `HP: ${this.health}, SP: ${this.skill}`;

    if (this.equippedWeapon) {
      string += `(${this.equippedWeapon.skillBonus >= 0 ? '+' : ''}${this.equippedWeapon.skillBonus})`;
    }

    return string;
  }

  pickUpItem(item: Item) {
    this.inventory.inventory.push(item);
  }

  useUpItem(item: Item) {
    const index = this.inventory.inventory.indexOf(item);
    this.inventory.inventory.splice(index, 1);
  }
}
