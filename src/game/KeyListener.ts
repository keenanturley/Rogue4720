type CallbackFunction = (keyEvent: KeyboardEvent) => void;

export default class KeyListener {
  private callbacks: Map<string, CallbackFunction>;

  private keyDownHandler: (keyEvent: KeyboardEvent) => void;

  constructor() {
    this.callbacks = new Map<string, CallbackFunction>();

    this.keyDownHandler = (keyEvent: KeyboardEvent) => {
      // If callback exists for the given key or code
      [keyEvent.key, keyEvent.code].find((key) => {
        if (this.callbacks.has(key)) {
          // Invoke callback
          (this.callbacks.get(key))(keyEvent);
          return true;
        }
        return false;
      });
    };
  }

  addListener(keys: string | string[], callback: CallbackFunction): void {
    // Add callback to the given key(s)
    [keys].flat().forEach((key) => {
      this.callbacks.set(key, callback);
    });
  }

  addListeners(listeners: Array<[string | string[], CallbackFunction]>): void {
    // Add callback for each given key-callback pair
    listeners.forEach(([keys, callback]) => {
      this.addListener(keys, callback);
    });
  }

  startListening(): void {
    window.addEventListener('keydown', this.keyDownHandler);
  }

  stopListening(): void {
    window.removeEventListener('keydown', this.keyDownHandler);
  }
}
