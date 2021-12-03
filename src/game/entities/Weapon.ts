import Model from '../../renderer/Model';
import Entity from './Entity';

const models = {
  dagger: await Model.load('/assets/dagger/model.json'),
  castIronPan: await Model.load('/assets/cast_iron_pan/model.json'),
  warHammer: await Model.load('/assets/war_hammer/model.json'),
  hatchet: await Model.load('/assets/hatchet/model.json'),
  battleaxe: await Model.load('/assets/battleaxe/model.json'),
  sword: await Model.load('/assets/sword/model.json'),
  baton: await Model.load('/assets/baton/model.json'),
  battleStaff: await Model.load('/assets/battle_staff/model.json'),
};

interface WeaponProperties {
  damage: number;
  skillBonus: number;
  model: Model;
}

/* eslint quote-props: ["error", "consistent"] */
const weapons = new Map<string, WeaponProperties>([
  ['Dagger', { damage: 3, skillBonus: 0, model: models.dagger }],
  ['Cast Iron Pan', { damage: 7, skillBonus: 1, model: models.castIronPan }],
  ['War Hammer', { damage: 12, skillBonus: -1, model: models.warHammer }],
  ['Hatchet', { damage: 3, skillBonus: 4, model: models.hatchet }],
  ['Battleaxe', { damage: 10, skillBonus: 2, model: models.battleaxe }],
  ['Sword', { damage: 7, skillBonus: 3, model: models.sword }],
  ['Baton', { damage: 2, skillBonus: 7, model: models.baton }],
  ['Battle Staff', { damage: 6, skillBonus: 3, model: models.battleStaff }],
]);

export default class Weapon extends Entity {
  static character: string = 'w';

  static isCollidable: boolean = false;

  // name: string;

  damage: number;

  skillBonus: number;

  constructor(name: string = Weapon.randomWeaponName()) {
    super(weapons.get(name).model, Weapon.character, Weapon.isCollidable);

    this.name = name;
    this.damage = weapons.get(name)?.damage ?? 0;
    this.skillBonus = weapons.get(name)?.skillBonus ?? 0;
  }

  stringRepresentation(): string {
    return `${this.name} (damage: ${this.damage}, skill bonus: ${this.skillBonus})`;
  }

  private static randomWeaponName(): string {
    const names = Array.from(weapons.keys());
    return names[Math.floor(Math.random() * names.length)];
  }
}
