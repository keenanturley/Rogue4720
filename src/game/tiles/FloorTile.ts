import Model from '../../renderer/Model';
import Transform from '../../renderer/Transform';
import { Tile, TileType } from './Tile';

const modelUrl = '/assets/Floor/model.json';
const floorModel = await Model.load(modelUrl);

export default class FloorTile extends Tile {
  static type: TileType = 'FloorTile';

  static character: string = '.';

  static isCollidable: boolean = false;

  constructor(transform: Transform = new Transform()) {
    super(floorModel, FloorTile.character, FloorTile.isCollidable, transform);
  }
}
