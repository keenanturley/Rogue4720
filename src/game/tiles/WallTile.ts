import Tile from './Tile';

export default class WallTile extends Tile {
  static character: string = '|';

  static isCollidable: boolean = true;

  constructor() {
    super(WallTile.character, WallTile.isCollidable);
  }
}
