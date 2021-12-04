import Model from '../../renderer/Model';
import Transform from '../../renderer/Transform';
import { Tile, TileType } from './Tile';

const modelUrl = '/assets/Wall/model.json';
const wallModel = await Model.load(modelUrl);

export default class WallTile extends Tile {
  static type: TileType = 'WallTile';

  static character: string = '|';

  static isCollidable: boolean = true;

  constructor(transform: Transform = new Transform()) {
    super(wallModel, WallTile.character, WallTile.isCollidable, transform);
  }
}
