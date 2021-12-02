import Entity from './Entity';

/* eslint quote-props: ["error", "consistent"] */
const items = new Map<string, { effectHP: number, effectSP: number, description: string}>([
  ['Rations', {effectHP: 5, effectSP: 0, description: 'Give 5 HP'}],
  ['Gourmet Meal', {effectHP: 10, effectSP: 0, description: 'Give 10 HP'}],
  ['Silver Ring', {effectHP: 0, effectSP: 5, description: 'Give 5 SP'}],
  ['Fool\'s Cap', {effectHP: 10, effectSP: -10, description: 'Give 10 HP, Remove 10 SP'}],
]);

export default class Item extends Entity {
  static character: string = 'i';

  static isCollidable: boolean = false;

  // name: string;

  effectHP: number;

  effectSP: number;

  description: string;

  constructor(name: string = Item.randomitemName()) {
    super(Item.character, Item.isCollidable);

    this.name = name;
    this.effectHP = items.get(name)?.effectHP ?? 0;
    this.effectSP = items.get(name)?.effectSP ?? 0;
    this.description = items.get(name)?.description ?? '';
  }

  stringRepresentation(): string {
    return `${this.name} (Effect: ${this.description})`;
  }

  private static randomitemName(): string {
    const names = Array.from(items.keys());
    return names[Math.floor(Math.random() * names.length)];
  }
}
