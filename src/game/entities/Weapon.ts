import Entity from './Entity';

/* eslint quote-props: ["error", "consistent"] */
const weapons = new Map<string, { damage: number, skillBonus: number }>([
  ['Dagger', { damage: 3, skillBonus: 0 }],
  ['Cast Iron Pan', { damage: 7, skillBonus: 1 }],
  ['War Hammer', { damage: 12, skillBonus: -1 }],
  ['Hatchet', { damage: 3, skillBonus: 4 }],
  ['Battleaxe', { damage: 10, skillBonus: 2 }],
  ['Sword', { damage: 7, skillBonus: 3 }],
  ['Baton', { damage: 2, skillBonus: 7 }],
  ['Battle Staff', { damage: 6, skillBonus: 3 }],
]);

export default class Weapon extends Entity {
  static character: string = 'w';

  static isCollidable: boolean = false;

  name: string;

  damage: number;

  skillBonus: number;

  constructor(name: string = Weapon.randomWeaponName()) {
    super(Weapon.character, Weapon.isCollidable);

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
