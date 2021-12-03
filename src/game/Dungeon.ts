const NUM_ITEMS: number = 9;
const MAP_EMPTY: string = '.';
const MAP_WALL: string = '|';
const MAP_PLAYER: string = '@';
const MAP_WEAPON: string = 'w';
const MAP_ITEM: string = 'i';
const MAP_ENEMY: string = 'e';

export default class Dungeon {
  public static generate(dungeonWidth: number, dungeonHeight: number, minRoomSize: number): string {
    const main = new Rect(0, 0, dungeonHeight - 1, dungeonWidth - 1);

    // Split the dungeon into zones
    const zones = Dungeon.split(main, minRoomSize + 2);

    // Create rooms inside each of the zones
    const rooms = zones.map((zone) => Dungeon.createRoom(zone, minRoomSize));

    // Create hallways to connect rooms together
    const { halls, connections }: HallConnection = Dungeon.createHalls(zones, rooms);

    // Randomly select a starting room then calculate the difficulties of every other room
    const startRoom: number = Dungeon.randInt(0, rooms.length);
    const difficulties: number[] = rooms.map((_) => 999);
    difficulties[startRoom] = 1;
    for (let loop: number = 0; loop < rooms.length; loop++) {
      for (let conn: number = 0; conn < connections.length; conn++) {
        difficulties[connections[conn].b] = Math.min(difficulties[connections[conn].b], difficulties[connections[conn].a] + 1);
      }
    }

    // Generate the items, weapons, and enemies
    const mapPoints: MapPoints = Dungeon.fillRooms(rooms, difficulties, startRoom);
    return Dungeon.createMap(new Pair(dungeonHeight, dungeonWidth), rooms, halls, mapPoints);
  }

  // Split a zone into two smaller zones, then recurse
  private static split(zone: Rect, minZoneSize: number): Rect[] {
    const smallX: boolean = zone.x2 - zone.x1 < 2 * minZoneSize;
    const smallY: boolean = zone.y2 - zone.y1 < 2 * minZoneSize;

    // If a zone is too small, don't split it
    if (smallX && smallY) return [zone];

    // If a zone is too small in one direction, split it in the other direction
    if (smallX) return Dungeon.splitY(zone, minZoneSize);
    if (smallY) return Dungeon.splitX(zone, minZoneSize);

    // If a zone is big enough, randomly split it in the X or Y direction
    if (Dungeon.randInt(0, 2) == 0) return Dungeon.splitY(zone, minZoneSize);
    return Dungeon.splitX(zone, minZoneSize);
  }

  // Split a zone in the X direction
  private static splitX(zone: Rect, minZoneSize: number): Rect[] {
    // Choose a random split point
    const xSplit: number = Dungeon.randInt(zone.x1 + minZoneSize, zone.x2 - minZoneSize + 1);

    // Create sub-zones
    const zoneA: Rect = new Rect(zone.x1, zone.y1, xSplit, zone.y2);
    const zoneB: Rect = new Rect(xSplit, zone.y1, zone.x2, zone.y2);

    // Recurse and combine lists
    return [...Dungeon.split(zoneA, minZoneSize), ...Dungeon.split(zoneB, minZoneSize)];
  }

  // Split a zone in the Y direction
  private static splitY(zone: Rect, minZoneSize: number): Rect[] {
    // Choose a random split point
    const ySplit: number = Dungeon.randInt(zone.y1 + minZoneSize, zone.y2 - minZoneSize + 1);

    // Create sub-zones
    const zoneA: Rect = new Rect(zone.x1, zone.y1, zone.x2, ySplit);
    const zoneB: Rect = new Rect(zone.x1, ySplit, zone.x2, zone.y2);

    // Recurse and combine lists
    return [...Dungeon.split(zoneA, minZoneSize), ...Dungeon.split(zoneB, minZoneSize)];
  }

  // Create a room inside of a zone
  private static createRoom(zone: Rect, minRoomSize: number): Rect {
    let x1: number = 0;
    let x2: number = 0;
    let y1: number = 0;
    let y2: number = 0;

    // Randomly generate two valid points inside of the zone
    // The points must have x1 < x2, y1 < y2, and have a side length of at least minRoomSize
    while (x2 - x1 < minRoomSize || y2 - y1 < minRoomSize) {
      x1 = Dungeon.randInt(zone.x1 + 1, zone.x2);
      x2 = Dungeon.randInt(zone.x1 + 1, zone.x2);
      y1 = Dungeon.randInt(zone.y1 + 1, zone.y2);
      y2 = Dungeon.randInt(zone.y1 + 1, zone.y2);

      if (x1 > x2) x2 = x1;
      if (y1 > y2) y2 = y1;
    }

    return new Rect(x1, y1, x2, y2);
  }

  private static createHalls(zones: Rect[], rooms: Rect[]): HallConnection {
    const halls: Rect[] = [];
    const connections: Pair[] = [];
    const hasRight: boolean[] = [...Array(zones.length)].map((q) => false);
    const hasDown: boolean[] = [...Array(zones.length)].map((q) => false);

    // loop through each pair of zones
    for (let from: number = 0; from < zones.length; from++) {
      for (let to: number = 0; to < zones.length; to++) {
        // If from room and to room share a vertical wall
        if (zones[from].x2 == zones[to].x1) {
          // check for invalid sizes
          if (zones[to].y1 >= rooms[from].y2) continue;
          if (rooms[to].y1 >= zones[from].y2) continue;

          // randomly choose access points
          const y1: number = Dungeon.randInt(rooms[from].y1 + 1, rooms[from].y2);
          const y2: number = Dungeon.randInt(rooms[to].y1 + 1, rooms[to].y2);

          if (y1 == y2) {
            // draw straight hallway
            halls.push(new Rect(rooms[from].x2, y1, rooms[to].x1, y1));
          } else {
            // draw zig zag hallway
            halls.push(new Rect(rooms[from].x2, y1, zones[from].x2, y1));
            halls.push(new Rect(zones[from].x2, Math.min(y1, y2), zones[from].x2, Math.max(y1, y2)));
            halls.push(new Rect(zones[from].x2, y2, rooms[to].x1, y2));
          }

          // mark hallway
          hasRight[from] = true;
          connections.push(new Pair(from, to));
          connections.push(new Pair(to, from));
        }

        // If from room and to room share a horizontal wall
        else if (zones[from].y2 == zones[to].y1) {
          // check for invalid sizes
          if (zones[to].x1 >= rooms[from].x2) continue;
          if (rooms[to].x1 >= zones[from].x2) continue;

          // randomly choose access points
          const x1 = Dungeon.randInt(rooms[from].x1 + 1, rooms[from].x2);
          const x2 = Dungeon.randInt(rooms[to].x1 + 1, rooms[to].x2);

          if (x1 == x2) {
            // draw straight hallway
            halls.push(new Rect(x1, rooms[from].y2, x1, rooms[to].y1));
          } else {
            // draw zig zag hallway
            halls.push(new Rect(x1, rooms[from].y2, x1, zones[from].y2));
            halls.push(new Rect(Math.min(x1, x2), zones[from].y2, Math.max(x1, x2), zones[from].y2));
            halls.push(new Rect(x2, zones[to].y1, x2, rooms[to].y1));
          }

          // mark hallway
          hasDown[from] = true;
          connections.push(new Pair(from, to));
          connections.push(new Pair(to, from));
        }
      }
    }

    return { halls, connections };
  }

  // Fill rooms with weapons, items, and enemies
  private static fillRooms(rooms: Rect[], difficulties: number[], startRoom: number): MapPoints {
    let maxDifficulty: number = 0;
    for (let q: number = 0; q < difficulties.length; q++) {
      if (difficulties[q] > maxDifficulty) maxDifficulty = difficulties[q];
    }

    const coords: Point[] = [];
    let itemsLeft: number = NUM_ITEMS - 1;
    const weapons: Point[] = [];
    const items: Point[] = [];

    // Check if a coordinate is free to use
    function check(x: number, y: number): boolean {
      for (let q: number = 0; q < coords.length; q++) {
        if (coords[q].x == x && coords[q].y == y) {
          return false;
        }
      }
      return true;
    }

    // Generate a random coordinate in a room
    function randomCoord(room: Rect): Point {
      while (true) {
        const x: number = Dungeon.randInt(room.x1 + 1, room.x2);
        const y: number = Dungeon.randInt(room.y1 + 1, room.y2);
        if (check(x, y)) return new Point(x, y);
      }
    }

    // Generate spawn room
    const spawn: Point = randomCoord(rooms[startRoom]);
    coords.push(spawn);

    // Add weapon to spawn room
    const c: Point = randomCoord(rooms[startRoom]);
    coords.push(c);
    weapons.push(c);

    // Generate enemies
    const enemies: Point[] = [];
    for (let room: number = 0; room < rooms.length; room++) {
      for (let enemy: number = 0; enemy < difficulties[room]; enemy++) {
        const c: Point = randomCoord(rooms[room]);
        coords.push(c);
        enemies.push(c);
      }
    }

    // Generate items
    loop:
    while (itemsLeft > 0) {
      for (let difficulty: number = 2; difficulty <= maxDifficulty; difficulty++) {
        for (let room: number = 0; room < rooms.length; room++) {
          if (difficulties[room] != difficulty) continue;
          if (itemsLeft <= 0) break loop;

          // Generate weapon or item
          if (Dungeon.randInt(0, difficulty) == 0) {
            itemsLeft--;
            const c: Point = randomCoord(rooms[room]);
            coords.push(c);
            (Dungeon.randInt(0, 2) ? weapons : items).push(c);
          }
        }
      }
    }

    return {
      weapons, items, enemies, spawn,
    };
  }

  public static createMap(dungeonSize: Pair, rooms: Rect[], halls: Rect[], mapPoints: MapPoints): string {
    const map: string[][] = [...Array(dungeonSize.a + 1)].map((q) => [...Array(dungeonSize.b + 1)].map((w) => MAP_WALL));

    // Fill rooms with empty space
    for (let room: number = 0; room < rooms.length; room++) {
      for (let x: number = rooms[room].x1 + 1; x < rooms[room].x2; x++) {
        for (let y: number = rooms[room].y1 + 1; y < rooms[room].y2; y++) {
          map[x][y] = MAP_EMPTY;
        }
      }
    }

    // Fill halls with empty space
    for (let hall: number = 0; hall < halls.length; hall++) {
      if (halls[hall].x1 == halls[hall].x2) {
        for (let y: number = halls[hall].y1; y <= halls[hall].y2; y++) {
          map[halls[hall].x1][y] = MAP_EMPTY;
        }
      } else {
        for (let x: number = halls[hall].x1; x <= halls[hall].x2; x++) {
          map[x][halls[hall].y1] = MAP_EMPTY;
        }
      }
    }

    // Draw player position
    map[mapPoints.spawn.x][mapPoints.spawn.y] = MAP_PLAYER;

    // Draw weapons
    for (let weapon: number = 0; weapon < mapPoints.weapons.length; weapon++) {
      map[mapPoints.weapons[weapon].x][mapPoints.weapons[weapon].y] = MAP_WEAPON;
    }

    // Draw items
    for (let item: number = 0; item < mapPoints.items.length; item++) {
      map[mapPoints.items[item].x][mapPoints.items[item].y] = MAP_ITEM;
    }

    // Draw enemies
    for (let emeny: number = 0; emeny < mapPoints.enemies.length; emeny++) {
      map[mapPoints.enemies[emeny].x][mapPoints.enemies[emeny].y] = MAP_ENEMY;
    }

    // Stitch map together
    return map.map((row) => row.join('')).join('\n');
  }

  private static randInt(min: number, max: number): number {
    if (min == max) return min;
    if (min > max) return this.randInt(max, min);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

class Rect {
  readonly x1: number;

  readonly y1: number;

  readonly x2: number;

  readonly y2: number;

  readonly area: number;

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.area = (this.x2 - this.x1) * (this.y2 - this.y1);
  }
}

class Pair {
  readonly a: number;

  readonly b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }
}

class Point {
  readonly x: number;

  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

interface HallConnection {
  halls: Rect[];
  connections: Pair[];
}

interface MapPoints {
  weapons: Point[];
  items: Point[];
  enemies: Point[];
  spawn: Point;
}

