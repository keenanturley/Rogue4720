import Inventory from './Inventory';
import KeyListener from './KeyListener';

enum Tile {
  FLOOR,
  WALL,
  UNDEFINED,
  ITEM,
}

interface PlayerObject {
  row: number;
  column: number;
}

export default class Game {
  map: Tile[][];

  inventory: Inventory;

  player: PlayerObject;

  private keyListener: KeyListener;

  constructor(map: string) {
    this.loadMapFromString(map);

    // Run step() when the KeyListener detects input
    this.keyListener = new KeyListener();
    this.keyListener.startListening(() => this.step());

    this.inventory = new Inventory();

    // Print map when game starts
    // eslint-disable-next-line no-console
    console.log(this.textRender());
  }

  step(): void {
    const inputs = this.keyListener.getInputs();

    // Attempt to move character
    const previousRow = this.player.row;
    const previousColumn = this.player.column;

    if (inputs.moveUp) this.player.row -= 1;
    else if (inputs.moveDown) this.player.row += 1;
    else if (inputs.moveLeft) this.player.column -= 1;
    else if (inputs.moveRight) this.player.column += 1;

    if (this.collision(this.player.row, this.player.column)) {
      this.player.row = previousRow;
      this.player.column = previousColumn;
    }

    if (this.item(this.player.row, this.player.column)) {
      // Empty for time being, need map to render specific item types
      this.inventory.pickUpItem('');
    }

    // Print map
    // eslint-disable-next-line no-console
    console.log(this.textRender());
    // Print Inventory
    console.log(this.inventory.getInv());

    this.keyListener.clearInputs();
  }

  textRender(): string {
    // "Render" floors and walls
    const textArray: string[][] = this.map.map((tileRow: Tile[]) => tileRow.map((tile: Tile) => {
      switch (tile) {
        case Tile.FLOOR:
          return '.';
        case Tile.ITEM:
          return 'i';
        case Tile.WALL:
          return '|';
        default:
          return ' ';
      }
    }));

    // "Render" player
    textArray[this.player.row][this.player.column] = '@';

    let text = '';
    textArray.forEach((row: string[]) => {
      row.forEach((char: string) => {
        text += char;
      });
      text += '\n';
    });

    return text;
  }

  stopGame(): void {
    this.keyListener.stopListening();
  }

  private loadMapFromString(string: string): void {
    this.player = {
      row: undefined,
      column: undefined,
    };

    let playerStartingPositionFound: boolean = false;

    // Extract tile and player data from string
    this.map = string.split('\n').map((stringRow: string, rowIndex: number) => stringRow.split('').map((character: string, columnIndex: number) => {
      switch (character) {
        case '.':
          return Tile.FLOOR;
        case 'i':
          return Tile.ITEM;
        case '-': // fall through
        case '|':
          return Tile.WALL;
        case '@':
          this.player.row = rowIndex;
          this.player.column = columnIndex;
          playerStartingPositionFound = true;
          return Tile.FLOOR;
        default:
          return Tile.UNDEFINED;
      }
    }));

    if (playerStartingPositionFound) {
      return;
    }

    // If the string did not contain a player starting position,
    // set the starting position at the first available floor tile found by
    // searching left-to-right, top-to-bottom (English reading order)
    for (let row = 0; row < this.map.length; row += 1) {
      for (let column = 0; column < this.map[row].length; column += 1) {
        if (this.map[row][column] === Tile.FLOOR) {
          this.player.row = row;
          this.player.column = column;
          return;
        }
      }
    }
  }

  private collision(row: number, column: number): boolean {
    // Out of bounds collision
    if (row < 0 || row >= this.map.length) return true;
    if (column < 0 || column >= this.map[row].length) return true;

    // Wall collision
    if (this.map[row][column] === Tile.WALL) return true;

    return false;
  }

  private item(row: number, column: number): boolean {
    // Item on spot
    if (this.map[row][column] === Tile.ITEM) return true;

    return false;
  }
}
