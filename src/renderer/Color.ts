import { v3 } from 'twgl.js';

export default class Color {
  r: number;

  g: number;

  b: number;

  /**
   * Creates an RGB color from color components represented by decimal numbers
   * between 0.0 and 1.0
   *
   * @param red Red color component between 0.0 and 1.0
   * @param green Green color component between 0.0 and 1.0
   * @param blue Blue color component between 0.0 and 1.0
   */
  constructor(red: number, green: number, blue: number) {
    if (
      red < 0.0 || red > 1.0
      || green < 0.0 || green > 1.0
      || blue < 0.0 || blue > 1.0
    ) {
      throw new Error('Invalid Color component range (outside 0.0-1.0)');
    }
    this.r = red;
    this.g = green;
    this.b = blue;
  }

  /**
   * Converts a hex string to a color. Can be provided in either six or three-digit
   * formats. Ex. '#0099CC' or '#09C'
   *
   * Capitalization is ignored
   *
   * @param hex Hex string representing a color
   */
  static fromHex(hex: string): Color {
    if (hex.length !== 7 && hex.length !== 4) {
      throw new Error('Invalid hex string argument in Color creation');
    }

    let redString: string;
    let greenString: string;
    let blueString: string;

    if (hex.length === 7) {
      redString = hex.substring(1, 3);
      greenString = hex.substring(3, 5);
      blueString = hex.substring(5, 7);
    } else {
      redString = hex[1] + hex[1];
      greenString = hex[2] + hex[2];
      blueString = hex[3] + hex[3];
    }

    const red = parseInt(redString, 16) / 255.0;
    const green = parseInt(greenString, 16) / 255.0;
    const blue = parseInt(blueString, 16) / 255.0;
    return new Color(red, green, blue);
  }

  toVec3(): v3.Vec3 {
    return v3.create(this.r, this.g, this.b);
  }
}
