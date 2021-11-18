import KeyListener from "./KeyListener";

enum Tile {
    FLOOR,
    WALL,
    UNDEFINED,
}

interface PlayerObject {
    r: number;
    c: number;
}

export default class Game {
    map: Tile[][];

    player: PlayerObject;

    private keyListener = new KeyListener();

    constructor(map: string) {
        this.loadMapFromText(map);
        console.log(this.textRender(this.map, this.player));
    }

    step(time: DOMHighResTimeStamp) {
        if (this.keyListener.anyPressed()) {
            const inputs = this.keyListener.inputs;

            // Attempt to move character
            const previousR = this.player.r;
            const previousC = this.player.c;

            if (inputs.moveUp) this.player.r--;
            else if (inputs.moveDown) this.player.r++;
            else if (inputs.moveLeft) this.player.c--;
            else if (inputs.moveRight) this.player.c++;

            if (this.collision(this.player.r, this.player.c)) {
                this.player.r = previousR;
                this.player.c = previousC;
            }

            // Print map
            console.log(this.textRender(this.map, this.player));

            this.keyListener.clear();
        }
    }

    textRender(map: Tile[][], player: PlayerObject): string {
        let textArray: string[][] = map.map((row: Tile[]) => {
            return row.map((tile: Tile) => {
                switch (tile) {
                    case Tile.FLOOR:
                        return ".";
                    case Tile.WALL:
                        return "|";
                    default:
                        return " ";
                }
            });
        });

        textArray[player.r][player.c] = "@";

        let text = "";
        textArray.forEach((row: string[]) => {
            row.forEach((char: string) => {
                text += char;
            });
            text += "\n";
        });

        return text;
    }

    stopGame() {
        this.keyListener.stopListening();
    }

    private loadMapFromText(text: string) {
        this.player = {
            r: undefined,
            c: undefined,
        };

        this.map = text.split("\n").map((row: string, r: number) => {
            return row.split("").map((char: string, c: number) => {
                switch (char) {
                    case ".":
                        return Tile.FLOOR;
                    case "-": // fall through
                    case "|":
                        return Tile.WALL;
                    case "@":
                        this.player.r = r;
                        this.player.c = c;
                        return Tile.FLOOR;
                    default:
                        return Tile.UNDEFINED;
                }
            });
        });

        if (this.player.r === undefined || this.player.c === undefined) {
            for (let r = 0; r < this.map.length; r++) {
                for (let c = 0; c < this.map[r].length; c++) {
                    if (this.map[r][c] === Tile.FLOOR) {
                        this.player.r = r;
                        this.player.c = c;
                        return;
                    }
                }
            }
        }
    }

    private collision(r: number, c: number): boolean {
        if (r < 0 || r >= this.map.length) return true;

        if (c < 0 || c >= this.map[r].length) return true;

        if (this.map[r][c] === Tile.WALL) return true;

        return false;
    }
}
