import Model from '../../renderer/Model';
import ModelNode from '../../renderer/ModelNode';

export default class Entity {
  character: string;

  name: string;

  isCollidable: boolean;

  modelNode: ModelNode;

  stringRepresentation() {
    return this.character;
  }

  constructor(model: Model, character: string, isCollidable: boolean) {
    this.character = character.charAt(0);
    this.isCollidable = isCollidable;
    this.modelNode = model.createModelNode();
  }
}
