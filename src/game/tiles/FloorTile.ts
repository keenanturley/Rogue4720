import Tile from './Tile';

export default class FloorTile extends Tile {
  static character: string = '.';

  static isCollidable: boolean = false;

  constructor() {
    super(FloorTile.character, FloorTile.isCollidable);
  }
}
