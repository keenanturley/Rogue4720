import Tile from './tiles/Tile';
import FloorTile from './tiles/FloorTile';
import WallTile from './tiles/WallTile';
import Entity from './entities/Entity';
import Player from './entities/Player';
import Enemy from './entities/Enemy';
import Weapon from './entities/Weapon';
import Position from './Position';

const PLACEHOLDER_MAP: string = `
  |||||  
|||..e|||
|.w.@..w|
|||w..|||
  |||||  
`.slice(1, -1);

export default class Map {
  tiles: Tile[][];

  player: Player;

  entities: {
    enemies: Enemy[],
    weapons: Weapon[],
  };

  private entityLookup: Entity[][];

  constructor() {
    this.createMapFromString(PLACEHOLDER_MAP);
  }

  query({ x, y }: Position): { tile: Tile, entity: Entity, collision: boolean } | null {
    // Out of bounds
    if (y < 0 || y >= this.tiles.length) return null;
    if (x < 0 || x >= this.tiles[y].length) return null;

    // Query tile
    const tile: Tile = this.tiles[y][x];

    // Query entity
    const entity = this.entityLookup[y][x];

    // Query collision
    const collision = tile.isCollidable || (entity?.isCollidable ?? false);

    return { tile, entity, collision };
  }

  addEntity(entity: Entity, { x, y }: Position): void {
    // Set intrinsic entity position
    entity.position = { x, y };

    // Add entity to entity list
    switch (entity.character) {
      case Enemy.character:
        this.entities.enemies.push(<Enemy> entity);
        break;
      case Weapon.character:
        this.entities.weapons.push(<Weapon> entity);
        break;
      default:
        break;
    }

    // Add entity to entityLookup
    this.entityLookup[y][x] = entity;
  }

  moveEntity(entity: Entity, { x, y }: Position): void {
    // Update entityLookup
    this.entityLookup[entity.position.y][entity.position.x] = null;
    this.entityLookup[y][x] = entity;

    // Update intrinsic entity position
    entity.position = { x, y };
  }

  removeEntity(entity: Entity): Entity {
    // Remove entity from entity list
    switch (entity.character) {
      case Enemy.character: {
        const index = this.entities.enemies.findIndex((enemy) => enemy === (<Enemy> entity));
        this.entities.enemies.splice(index, 1);
        break;
      }
      case Weapon.character: {
        const index = this.entities.weapons.findIndex((weapon) => weapon === (<Weapon> entity));
        this.entities.weapons.splice(index, 1);
        break;
      }
      default:
        break;
    }

    // Remove entity from entityLookup
    this.entityLookup[entity.position.y][entity.position.x] = null;

    return entity;
  }

  stringRepresentation(): string {
    // Floors and walls
    const textArray = this.tiles.map((tileRow) => tileRow.map((tile) => tile.character));

    // Non-player entities
    Object.values(this.entities).flat().forEach((entity) => {
      textArray[entity.position.y][entity.position.x] = entity.character;
    });

    // Player
    textArray[this.player.position.y][this.player.position.x] = Player.character;

    let text = '';
    textArray.forEach((row: string[]) => {
      row.forEach((character: string) => {
        text += character;
      });
      text += '\n';
    });

    return text;
  }

  private createMapFromString(string: string): void {
    this.entities = {
      enemies: [],
      weapons: [],
    };

    // Extract tile and entity data from string
    this.tiles = string.split('\n').map((stringRow, y) => stringRow.split('').map((character, x) => {
      switch (character) {
        case FloorTile.character:
          return new FloorTile();

        case WallTile.character:
          return new WallTile();

        case Player.character:
          this.player = new Player();
          this.player.position = { x, y };
          return new FloorTile();

        case Enemy.character:
          this.entities.enemies.push(new Enemy());
          this.entities.enemies.at(-1).position = { x, y };
          return new FloorTile();

        case Weapon.character:
          this.entities.weapons.push(new Weapon());
          this.entities.weapons.at(-1).position = { x, y };
          return new FloorTile();

        default:
          return new Tile(' ', true);
      }
    }));

    // Add entities to entity lookup
    this.entityLookup = this.tiles.map((row) => row.map(() => null));
    this.entityLookup[this.player.position.y][this.player.position.x] = this.player;

    Object.values(this.entities).flat().forEach((entity) => {
      this.entityLookup[entity.position.y][entity.position.x] = entity;
    });
  }
}
