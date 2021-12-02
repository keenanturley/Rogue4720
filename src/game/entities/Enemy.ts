import Entity from './Entity';

/* eslint quote-props: ["error", "consistent"] */
const enemies = new Map<string, { health: number, skill: number, damage: number }>([
  ['Maggot', { health: 4, skill: 0, damage: 4 }],
  ['Slime Mold', { health: 7, skill: 1, damage: 3 }],
  ['Goblin', { health: 9, skill: 4, damage: 5 }],
  ['Ork', { health: 11, skill: 2, damage: 7 }],
  ['Vampire', { health: 20, skill: 9, damage: 10 }],
]);

export default class Enemy extends Entity {
  static character: string = 'e';

  static isCollidable: boolean = true;

  // name: string;

  health: number;

  skill: number;

  damage: number;

  combatTimer: number;

  constructor(name: string = Enemy.randomEnemyName()) {
    super(Enemy.character, Enemy.isCollidable);

    this.name = name;
    this.health = enemies.get(name)?.health ?? 1;
    this.skill = enemies.get(name)?.skill ?? 0;
    this.damage = enemies.get(name)?.damage ?? 0;
    this.combatTimer = 0;
  }

  stringRepresentation(): string {
    return `(HP: ${this.health}, SP: ${this.skill}, damage: ${this.damage})`;
  }

  private static randomEnemyName(): string {
    const names = Array.from(enemies.keys());
    return names[Math.floor(Math.random() * names.length)];
  }
}
