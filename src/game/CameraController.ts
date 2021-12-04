import { v3, m4 } from 'twgl.js';
import Camera from '../renderer/Camera';
import KeyListener, { KeyPressType } from './KeyListener';

interface CameraInputs {
  movement: {
    up: boolean,
    down: boolean,
    left: boolean,
    right: boolean,
    forward: boolean,
    backward: boolean,
  },
  look: {
    up: boolean,
    down: boolean,
    left: boolean,
    right: boolean,
  }
}

const KEY_MAP = {
  movement: {
    Numpad8: 'forward',
    Numpad2: 'backward',
    Numpad4: 'left',
    Numpad6: 'right',
    Numpad9: 'up',
    Numpad7: 'down',
    h: 'left',
    j: 'backward',
    k: 'forward',
    l: 'right',
    ']': 'up',
    '[': 'down',
  },
  look: {
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right',
  },
};

export default class CameraController {
  static readonly defaultInputs: CameraInputs = {
    movement: {
      up: false,
      down: false,
      left: false,
      right: false,
      forward: false,
      backward: false,
    },
    look: {
      up: false,
      down: false,
      left: false,
      right: false,
    },
  };

  constructor(
    public camera: Camera,
    // Units per second
    public moveSpeed: number = 1.0,
    // Degrees per second
    public lookSensitivity: number = 1.0,
    public activeInputs = CameraController.defaultInputs,
  ) {}

  update(deltaTime: number) {
    // console.log(`Camera Update: ${this.direction.toString()}`);

    const moveVector = this.getMoveVector();
    const moveDistance = this.moveSpeed * (deltaTime / 1000);
    this.move(v3.mulScalar(moveVector, moveDistance));

    const rotations = this.getRotations();
    this.rotate(rotations);
  }

  public bindKeys(keyListener: KeyListener) {
    // Camera movement with numpad
    Object.entries(KEY_MAP).forEach(([inputType, inputs]) => {
      Object.entries(inputs).forEach(([key, value]) => {
        keyListener.addListener(key, () => {
          this.activeInputs[inputType][value] = true;
        });
        keyListener.addListener(key, () => {
          this.activeInputs[inputType][value] = false;
        }, KeyPressType.UP);
      });
    });
  }

  private move(translation: v3.Vec3) {
    const { position } = this.camera.transform;
    v3.add(position, translation, position);
  }

  moveTo(position: v3.Vec3) {
    this.camera.transform.position = position;
  }

  private getMoveVector(): v3.Vec3 {
    const { transform } = this.camera;

    const moveVector = v3.create(0, 0, 0);
    const { movement } = this.activeInputs;
    if (movement.up) {
      v3.add(moveVector, transform.getUpVector(), moveVector);
    }
    if (movement.down) {
      v3.subtract(moveVector, transform.getUpVector(), moveVector);
    }
    if (movement.left) {
      v3.subtract(moveVector, transform.getRightVector(), moveVector);
    }
    if (movement.right) {
      v3.add(moveVector, transform.getRightVector(), moveVector);
    }
    if (movement.forward) {
      v3.add(moveVector, transform.getForwardVector(), moveVector);
    }
    if (movement.backward) {
      v3.subtract(moveVector, transform.getForwardVector(), moveVector);
    }
    return moveVector;
  }

  private rotate(rotations: [number, number]) {
    const { rotation } = this.camera.transform;

    rotation[0] += rotations[0];
    // Clamp X
    if (rotation[0] > 90) {
      rotation[0] = 90;
    } else if (rotation[0] < -90) {
      rotation[0] = -90;
    }

    rotation[1] += rotations[1];
  }

  private getRotations(): [number, number] {
    let xRotation = 0.0;
    let yRotation = 0.0;

    const { look } = this.activeInputs;
    if (look.up) { xRotation += this.lookSensitivity; }
    if (look.down) { xRotation -= this.lookSensitivity; }
    if (look.left) { yRotation += this.lookSensitivity; }
    if (look.right) { yRotation -= this.lookSensitivity; }

    return [xRotation, yRotation];
  }
}
