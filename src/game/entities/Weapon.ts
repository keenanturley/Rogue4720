import Model from '../../renderer/Model';
import Entity from './Entity';

const genericModel = await Model.load('/assets/BattleAxe/model.json');

interface WeaponProperties {
  damage: number;
  skillBonus: number;
  model: Model;
}

/* eslint quote-props: ["error", "consistent"] */
const weapons = new Map<string, WeaponProperties>([
  ['Dagger', { damage: 3, skillBonus: 0, model: genericModel }],
  ['Cast Iron Pan', { damage: 7, skillBonus: 1, model: genericModel }],
  ['War Hammer', { damage: 12, skillBonus: -1, model: genericModel }],
  ['Hatchet', { damage: 3, skillBonus: 4, model: genericModel }],
  ['Battleaxe', { damage: 10, skillBonus: 2, model: genericModel }],
  ['Sword', { damage: 7, skillBonus: 3, model: genericModel }],
  ['Baton', { damage: 2, skillBonus: 7, model: genericModel }],
  ['Battle Staff', { damage: 6, skillBonus: 3, model: genericModel }],
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
