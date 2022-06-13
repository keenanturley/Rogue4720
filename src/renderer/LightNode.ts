import { v3 } from 'twgl.js';
import SceneNode from './SceneNode';
import Transform from './Transform';
import Color from './Color';

enum Type {point, directional}

/**
 * Class that holds all information for directional or point lights
 */
export default class LightNode extends SceneNode {
  private lightType: Type;

  private coordinateDirection: number[];

  private pointTransForm: Transform;

  private color: Color;

  static numPointLights: number = 0;

  constructor(type: Type, coordinateOrDirection: number[],
    color: Color = new Color(0.0, 0.0, 0.0)) {
    let computedName: string;
    let computedTransform: Transform;

    // eslint-disable-next-line default-case
    switch (type) {
      case Type.directional:
        computedName = 'directionalLightNode';
        computedTransform = new Transform();
        computedTransform.setRotationDeg(v3.create(...coordinateOrDirection));
        break;
      case Type.point:
        computedName = `pointLightNode#${LightNode.numPointLights}`;
        computedTransform = new Transform(coordinateOrDirection);
        LightNode.numPointLights += 1;
        break;
    }

    super(computedName, computedTransform);

    this.lightType = type;
    this.coordinateDirection = coordinateOrDirection;
    this.color = color;
  }
}
