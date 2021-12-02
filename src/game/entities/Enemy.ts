import Model from '../../renderer/Model';
import Entity from './Entity';

const genericModel = await Model.load('/assets/GenericEnemy/model.json');

interface EnemyProperties {
  health: number;
  skill: number;
  damage: number;
  model: Model;
}

/* eslint quote-props: ["error", "consistent"] */
const enemies = new Map<string, EnemyProperties>([
  ['Maggot', {
    health: 4, skill: 0, damage: 4, model: genericModel,
  }],
  ['Slime Mold', {
    health: 7, skill: 1, damage: 3, model: genericModel,
  }],
  ['Goblin', {
    health: 9, skill: 4, damage: 5, model: genericModel,
  }],
  ['Ork', {
    health: 11, skill: 2, damage: 7, model: genericModel,
  }],
  ['Vampire', {
    health: 20, skill: 9, damage: 10, model: genericModel,
  }],
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
    super(enemies.get(name).model, Enemy.character, Enemy.isCollidable);

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
