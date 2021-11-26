type VoidFunction = () => void;

export default class KeyListener {
  private callbacks: Map<string, VoidFunction>;

  private keyDownHandler: (key: KeyboardEvent) => void;

  constructor() {
    this.callbacks = new Map<string, VoidFunction>();

    this.keyDownHandler = (keyEvent: KeyboardEvent) => {
      if (this.callbacks.has(keyEvent.key)) {
        this.callbacks.get(keyEvent.key)();
      } else if (this.callbacks.has(keyEvent.code)) {
        this.callbacks.get(keyEvent.code)();
      }
    };
  }

  addListener(keys: string | string[], callback: VoidFunction): void {
    if (Array.isArray(keys)) {
      keys.forEach((key) => {
        this.callbacks.set(key, callback);
      });
    } else {
      this.callbacks.set(keys, callback);
    }
  }

  addListeners(listeners: Array<[string | string[], VoidFunction]>): void {
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
