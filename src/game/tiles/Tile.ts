import Model from '../../renderer/Model';
import ModelNode from '../../renderer/ModelNode';
import Transform from '../../renderer/Transform';

export class Tile {
  static type: TileType = 'Tile';

  character: string;

  isCollidable: boolean;

  modelNode: ModelNode;

  constructor(
    model: Model,
    character: string,
    isCollidable: boolean,
    transform: Transform = new Transform(),
  ) {
    this.character = character.charAt(0);
    this.isCollidable = isCollidable;
    this.modelNode = model.createModelNode(transform);
  }

  setTransform(transform: Transform) {
    this.modelNode.localTransform = transform;
  }
}

export type TileType =
  'Tile'
  | 'FloorTile'
  | 'WallTile';
