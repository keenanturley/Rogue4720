enum EventType {
    DOWN,
    UP,
}

export default class KeyListener {
    inputs = {
        moveUp: false,
        moveDown: false,
        moveLeft: false,
        moveRight: false,
    };

    private keyDownHandler = (key: KeyboardEvent) => {
        this.keyEventHandler(key, EventType.DOWN);
    };

    private keyUpHandler = (key: KeyboardEvent) => {
        this.keyEventHandler(key, EventType.UP);
    };

    constructor() {
        window.addEventListener("keydown", this.keyDownHandler);
        window.addEventListener("keyup", this.keyUpHandler);
    }

    anyPressed(): boolean {
        return Object.values(this.inputs).some((pressed) => pressed);
    }

    clear() {
        for (const input in this.inputs) {
            this.inputs[input] = false;
        }
    }

    stopListening() {
        window.removeEventListener("keydown", this.keyDownHandler);
        window.removeEventListener("keyup", this.keyUpHandler);
    }

    private keyEventHandler(key: KeyboardEvent, eventType: EventType) {
        switch (key.code) {
            case "ArrowUp": // fall through
            case "KeyW":
                this.registerInput("moveUp", eventType);
                break;
            case "ArrowDown": // fall through
            case "KeyS":
                this.registerInput("moveDown", eventType);
                break;
            case "ArrowLeft": // fall through
            case "KeyA":
                this.registerInput("moveLeft", eventType);
                break;
            case "ArrowRight": // fall through
            case "KeyD":
                this.registerInput("moveRight", eventType);
                break;
            default:
                break;
        }
    }

    private registerInput(input: string, eventType: EventType) {
        if (input in this.inputs) {
            switch (eventType) {
                case EventType.DOWN:
                    this.inputs[input] = true;
                    break;
                case EventType.UP:
                    this.inputs[input] = false;
                    break;
                default:
                    break;
            }
        }
    }
}
