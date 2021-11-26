import Position from '../Position';

export default class Entity {
  character: string;

  position: Position;

  isCollidable: boolean;

  constructor(character: string, isCollidable: boolean) {
    this.character = character.charAt(0);
    this.isCollidable = isCollidable;
  }
}
