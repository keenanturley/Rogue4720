type CallbackFunction = (keyEvent: KeyboardEvent) => void;

export enum KeyPressType {
  DOWN,
  UP,
}

export default class KeyListener {
  private keyDownCallbacks: Map<string, CallbackFunction> = new Map();

  private keyUpCallbacks: Map<string, CallbackFunction> = new Map();

  private keyDownHandler: (keyEvent: KeyboardEvent) => void;

  private keyUpHandler: (keyEvent: KeyboardEvent) => void;

  constructor() {
    this.keyDownHandler = (keyEvent: KeyboardEvent) => {
      // If callback exists for the given key or code
      [keyEvent.key, keyEvent.code].find((key) => {
        if (this.keyDownCallbacks.has(key)) {
          // Invoke callback
          (this.keyDownCallbacks.get(key))(keyEvent);
          return true;
        }
        return false;
      });
    };
    this.keyUpHandler = (keyEvent: KeyboardEvent) => {
      // If callback exists for the given key or code
      [keyEvent.key, keyEvent.code].find((key) => {
        if (this.keyUpCallbacks.has(key)) {
          // Invoke callback
          (this.keyUpCallbacks.get(key))(keyEvent);
          return true;
        }
        return false;
      });
    };
  }

  addListener(
    keys: string | string[],
    callback: CallbackFunction,
    pressType: KeyPressType = KeyPressType.DOWN,
  ): void {
    const callbacks = pressType === KeyPressType.DOWN
      ? this.keyDownCallbacks : this.keyUpCallbacks;

    // Add callback to the given key(s)
    [keys].flat().forEach((key) => {
      callbacks.set(key, callback);
    });
  }

  addListeners(listeners: Array<[string | string[], CallbackFunction, KeyPressType?]>): void {
    // Add callback for each given key-callback pair
    listeners.forEach(([keys, callback, pressType]) => {
      this.addListener(keys, callback, pressType);
    });
  }

  startListening(): void {
    window.addEventListener('keydown', this.keyDownHandler);
    window.addEventListener('keyup', this.keyUpHandler);
  }

  stopListening(): void {
    window.removeEventListener('keydown', this.keyDownHandler);
    window.removeEventListener('keyup', this.keyUpHandler);
  }
}
