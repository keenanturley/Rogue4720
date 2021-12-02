export default class Entity {
  character: string;

  name: string;

  isCollidable: boolean;

  stringRepresentation() {
    return ' ';
  }

  constructor(character: string, isCollidable: boolean) {
    this.character = character.charAt(0);
    this.isCollidable = isCollidable;
  }
}
