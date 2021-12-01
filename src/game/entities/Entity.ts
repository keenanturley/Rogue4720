export default class Entity {
  character: string;

  isCollidable: boolean;

  constructor(character: string, isCollidable: boolean) {
    this.character = character.charAt(0);
    this.isCollidable = isCollidable;
  }
}
