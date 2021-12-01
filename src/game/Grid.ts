import Tile from './tiles/Tile';
import FloorTile from './tiles/FloorTile';
import WallTile from './tiles/WallTile';
import Entity from './entities/Entity';
import Player from './entities/Player';
import Enemy from './entities/Enemy';
import Weapon from './entities/Weapon';
import Position from './Position';

const PLACEHOLDER_GRID: string = `
  ||||||||||||||||||          
 |w....e.w....e.....|   ||||| 
|w.@..||||.||||||..e||||.....|
 |...|   |e|w.w.w..........e.|
  |w|    |.||||||..e||||.....|
   |     |w..e......|   ||||| 
          ||||||||||          
`.slice(1, -1);

export default class Grid {
  private tiles: Tile[][];

  private player: Player;

  private entities: {
    enemies: Set<Enemy>,
    weapons: Set<Weapon>,
  };

  private entityLookup: Entity[][];

  private positionLookup: Map<Entity, Position>;

  constructor() {
    this.entities = {
      enemies: new Set<Enemy>(),
      weapons: new Set<Weapon>(),
    };

    this.entityLookup = [];
    this.positionLookup = new Map<Entity, Position>();
    this.loadGridFromString(PLACEHOLDER_GRID);
  }

  getTiles(): Tile[][] { return this.tiles; }

  getPlayer(): Player { return this.player; }

  getEntities() { return this.entities; }

  getTileAt({ x, y }: Position) { return this.tiles[y][x]; }

  getEntityAt({ x, y }: Position) { return this.entityLookup[y][x]; }

  getPositionOf(entity: Entity) { return this.positionLookup.get(entity); }

  query(position: Position): { tile: Tile, entity: Entity, collision: boolean } {
    const tile = this.getTileAt(position);
    const entity = this.getEntityAt(position);
    const collision = (!tile || tile.isCollidable) || (entity && entity.isCollidable);

    return { tile, entity, collision };
  }

  addEntity(entity: Entity, { x, y }: Position): void {
    if (entity instanceof Player) {
      this.player = <Player> entity;
    }

    // Add entity to corresponding entity set
    this.forSubtypeOfEntity(entity, (entitySubtype, set) => {
      set.add(entitySubtype);
    });

    // Record entity's position on grid
    this.entityLookup[y][x] = entity;
    this.positionLookup.set(entity, { x, y });
  }

  removeEntity(entity: Entity): Entity {
    // Remove entity from corresponding entity set
    this.forSubtypeOfEntity(entity, (entitySubtype, set) => {
      set.delete(entitySubtype);
    });

    // Remove entity's position on grid
    const { x, y } = this.positionLookup.get(entity);
    this.entityLookup[y][x] = undefined;
    this.positionLookup.delete(entity);

    return entity;
  }

  moveEntity(entity: Entity, { x: newX, y: newY }: Position): void {
    // Change entity's position on grid
    const { x: oldX, y: oldY } = this.positionLookup.get(entity);
    this.entityLookup[oldY][oldX] = undefined;
    this.entityLookup[newY][newX] = entity;
    this.positionLookup.set(entity, { x: newX, y: newY });
  }

  stringRepresentation(): string {
    // Floors and walls
    const textArray = this.tiles.map((tileRow) => tileRow.map((tile) => tile.character));

    // Non-player entities
    Object.values(this.entities).forEach((set: Set<Entity>) => {
      set.forEach((entity: Entity) => {
        const { x, y } = this.getPositionOf(entity);
        textArray[y][x] = entity.character;
      });
    });

    // Player
    const { x, y } = this.getPositionOf(this.player);
    textArray[y][x] = Player.character;

    let text = '';
    textArray.forEach((row: string[]) => {
      row.forEach((character: string) => {
        text += character;
      });
      text += '\n';
    });

    return text;
  }

  private loadGridFromString(string: string): void {
    this.tiles = string.split('\n').map((stringRow, y) => stringRow.split('').map((character, x) => {
      this.entityLookup.push([]);

      switch (character) {
        case FloorTile.character:
          return new FloorTile();

        case WallTile.character:
          return new WallTile();

        case Player.character:
          this.addEntity(new Player(), { x, y });
          return new FloorTile();

        case Enemy.character:
          this.addEntity(new Enemy(), { x, y });
          return new FloorTile();

        case Weapon.character:
          this.addEntity(new Weapon(), { x, y });
          return new FloorTile();

        default:
          return new Tile(' ', true);
      }
    }));
  }

  private forSubtypeOfEntity(
    entity: Entity,
    callback: (entitySubtype: Entity, set: Set<Entity>) => void,
  ): void {
    switch (entity.constructor) {
      case Enemy:
        callback(<Enemy> entity, this.entities.enemies);
        break;
      case Weapon:
        callback(<Weapon> entity, this.entities.weapons);
        break;
      default:
        break;
    }
  }
}
