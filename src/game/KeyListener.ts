export default class KeyListener {
  private inputs = {
    moveUp: false,
    moveDown: false,
    moveLeft: false,
    moveRight: false,
  };

  private keyDownHandler: (key: KeyboardEvent) => void;

  startListening(callback: () => void): void {
    this.keyDownHandler = (key: KeyboardEvent) => {
      if (this.registerInput(key)) {
        callback();
      }
    };

    window.addEventListener('keydown', this.keyDownHandler);
  }

  getInputs() {
    return this.inputs;
  }

  clearInputs(): void {
    Object.keys(this.inputs).forEach((input) => {
      this.inputs[input] = false;
    });
  }

  stopListening(): void {
    window.removeEventListener('keydown', this.keyDownHandler);
  }

  private registerInput(key: KeyboardEvent): boolean {
    let isRelevantInput: boolean = true;

    switch (key.code) {
      case 'ArrowUp': // fall through
      case 'KeyW':
        this.inputs.moveUp = true;
        break;
      case 'ArrowDown': // fall through
      case 'KeyS':
        this.inputs.moveDown = true;
        break;
      case 'ArrowLeft': // fall through
      case 'KeyA':
        this.inputs.moveLeft = true;
        break;
      case 'ArrowRight': // fall through
      case 'KeyD':
        this.inputs.moveRight = true;
        break;
      default:
        isRelevantInput = false;
        break;
    }

    return isRelevantInput;
  }
}
