import Model from '../../renderer/Model';
import Entity from './Entity';

// const rationModel = await Model.load('/assets/Ration/model.json');
const models = {
  ration: await Model.load('/assets/ration/model.json'),
  gourmetMeal: await Model.load('/assets/gourmet_meal/model.json'),
  silverRing: await Model.load('/assets/silver_ring/model.json'),
  foolsCap: await Model.load('/assets/fools_cap/model.json'),
};

interface ItemProperties {
  effectHP: number;
  effectSP: number;
  description: string;
  model: Model;
}

/* eslint quote-props: ["error", "consistent"] */
const items = new Map<string, ItemProperties>([
  ['Rations', {
    effectHP: 5, effectSP: 0, description: 'Give 5 HP', model: models.ration,
  }],
  ['Gourmet Meal', {
    effectHP: 10, effectSP: 0, description: 'Give 10 HP', model: models.gourmetMeal,
  }],
  ['Silver Ring', {
    effectHP: 0, effectSP: 5, description: 'Give 5 SP', model: models.silverRing,
  }],
  ['Fool\'s Cap', {
    effectHP: 10, effectSP: -10, description: 'Give 10 HP, Remove 10 SP', model: models.foolsCap,
  }],
]);

export default class Item extends Entity {
  static character: string = 'i';

  static isCollidable: boolean = false;

  // name: string;

  effectHP: number;

  effectSP: number;

  description: string;

  constructor(name: string = Item.randomitemName()) {
    super(items.get(name).model, Item.character, Item.isCollidable);

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
