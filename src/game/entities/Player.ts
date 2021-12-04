import Entity from './Entity';
import Weapon from './Weapon';
import Item from './Item';
import Inventory from '../Inventory';
import Model from '../../renderer/Model';
import SceneNode from '../../renderer/SceneNode';
import toRadians from '../../util/Math';
import Transform from '../../renderer/Transform';

const model = await Model.load('/assets/Player/model.json');

export default class Player extends Entity {
  static character: string = '@';

  static isCollidable: boolean = true;

  health: number;

  skill: number;

  inventory: Inventory;

  equippedWeapon: Weapon;

  cameraTarget: SceneNode;

  constructor() {
    const initCamDistance = 4;
    const initCamAngle = 45;

    const { xLen, yLen, zLen } = model.extents;
    super(model, Player.character, Player.isCollidable);
    this.health = 20;
    this.skill = 0;
    this.inventory = new Inventory();
    this.equippedWeapon = null;

    let maxLen = xLen;
    if (maxLen < yLen) maxLen = yLen;
    if (maxLen < zLen) maxLen = zLen;
    this.modelNode.localTransform.scale = [1 / maxLen, 1 / maxLen, 1 / maxLen];
    this.cameraTarget = new SceneNode(
      'Player Camera Target',
      new Transform([
        0,
        initCamDistance * Math.sin(toRadians(initCamAngle)),
        -initCamDistance * Math.cos(toRadians(initCamAngle)),
      ]),
    );

    // Assuming Raymon is initially facing in the +z direction. Pray this never
    // changes.
    this.modelNode.addChild(this.cameraTarget);
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
