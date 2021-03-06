import { Tile } from './tiles/Tile';
import FloorTile from './tiles/FloorTile';
import WallTile from './tiles/WallTile';
import Entity from './entities/Entity';
import Player from './entities/Player';
import Enemy from './entities/Enemy';
import Weapon from './entities/Weapon';
import Item from './entities/Item';
import Position from './Position';
import SceneNode from '../renderer/SceneNode';
import Scene from '../renderer/Scene';
import Transform from '../renderer/Transform';
import Dungeon from './Dungeon';

export default class Grid {
  private tiles: Tile[][];

  private player: Player;

  private entities: {
    enemies: Set<Enemy>,
    weapons: Set<Weapon>,
    items: Set<Item>,
  };

  private entityLookup: Entity[][];

  private positionLookup: Map<Entity, Position>;

  private sceneNode: SceneNode;

  private scene: Scene;

  constructor(scene: Scene) {
    this.scene = scene;
    this.entities = {
      enemies: new Set<Enemy>(),
      weapons: new Set<Weapon>(),
      items: new Set<Item>(),
    };

    this.entityLookup = [];
    this.positionLookup = new Map<Entity, Position>();
    this.generateMap();
  }

  // Should only be called once after the map has been set
  buildDungeon(): void {
    // TODO: use model extents, normalize models to be the same size, and use
    // that for the tileSize
    const tileSize = 1.0;
    // TODO: remove after having movable camera
    const zFactor = 1;
    this.tiles.forEach((row, y) => {
      row.forEach((tile, x) => {
        this.sceneNode.addChild(tile.modelNode);
        tile.setTransform(new Transform([x * tileSize, 0, y * tileSize * zFactor]));
      });
    });
  }

  getTiles(): Tile[][] { return this.tiles; }

  getPlayer(): Player { return this.player; }

  getEntities() { return this.entities; }

  getTileAt({ x, y }: Position) { return this.tiles[y][x]; }

  getEntityAt({ x, y }: Position) { return this.entityLookup[y][x]; }

  getPositionOf(entity: Entity) { return this.positionLookup.get(entity); }

  generateMap() {
    if (this.sceneNode) {
      this.entities = {
        enemies: new Set<Enemy>(),
        weapons: new Set<Weapon>(),
        items: new Set<Item>(),
      };

      this.entityLookup = [];
      this.positionLookup = new Map<Entity, Position>();
      this.sceneNode.removeSelf();
    }
    this.sceneNode = new SceneNode('Grid');
    this.scene.addNode(this.sceneNode);
    this.loadGridFromString(Dungeon.generate(35, 35, 7));
    this.buildDungeon();
  }

  query(position: Position): { tile: Tile, entity: Entity, collision: boolean } {
    const tile = this.getTileAt(position);
    const entity = this.getEntityAt(position);
    const collision = (!tile || tile.isCollidable) || (entity && entity.isCollidable);

    return { tile, entity, collision };
  }

  // If tiles is null, then the entities aren't added a children to their
  // ModelNodes. It's up to the caller to remedy that.
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
    if (this.tiles) this.tiles[y][x].modelNode.addChild(entity.modelNode);
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
    entity.modelNode.removeSelf();

    return entity;
  }

  moveEntity(entity: Entity, { x: newX, y: newY }: Position): void {
    // Change entity's position on grid
    const { x: oldX, y: oldY } = this.positionLookup.get(entity);
    this.entityLookup[oldY][oldX] = undefined;
    this.entityLookup[newY][newX] = entity;
    this.positionLookup.set(entity, { x: newX, y: newY });
    this.tiles[newY][newX].modelNode.addChild(entity.modelNode);
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

        case Item.character:
          this.addEntity(new Item(), { x, y });
          return new FloorTile();

        default:
          return new FloorTile();
      }
    }));

    this.positionLookup.forEach(({ x, y }, entity) => {
      this.tiles[y][x].modelNode.addChild(entity.modelNode);
    });
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
      case Item:
        callback(<Item> entity, this.entities.items);
        break;
      default:
        break;
    }
  }
}
