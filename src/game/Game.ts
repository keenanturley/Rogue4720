import { v3 } from 'twgl.js';
import KeyListener from './KeyListener';
import Grid from './Grid';
import Player from './entities/Player';
import Enemy from './entities/Enemy';
import Weapon from './entities/Weapon';
import Item from './entities/Item';
import Renderer from '../renderer/Renderer';
import PerspectiveCamera from '../renderer/PerspectiveCamera';
import CameraController from './CameraController';

enum State {
  WALKING,
  INVENTORY,
}

enum MoveDirection {
  Forward,
  Backward,
  Left,
  Right,
}

export default class Game {
  grid: Grid;

  renderer: Renderer;

  private camera: PerspectiveCamera;

  private cameraController: CameraController;

  private player: Player;

  private state: State;

  private keyListener: KeyListener;

  private message: string;

  constructor(gl: WebGL2RenderingContext) {
    this.camera = new PerspectiveCamera();
    this.cameraController = new CameraController(this.camera, 3);
    this.renderer = new Renderer(gl, undefined, this.camera);

    // Attach the camera controller update to the renderer
    this.renderer.addUpdateCallback((deltaTime) => this.cameraController.update(deltaTime));
    // Update camera aspect ratio
    this.renderer.addUpdateCallback(() => {
      this.camera.aspect = this.renderer.gl.canvas.width / this.renderer.gl.canvas.height;
    });

    this.grid = new Grid(this.renderer.scene);
    this.player = this.grid.getPlayer();
    this.cameraController.moveTo(this.player.cameraTarget.getWorldPosition());
    this.camera.transform.rotation = [-45, 180, 0];

    this.state = State.WALKING;

    this.keyListener = new KeyListener();
    this.keyListener.addListeners([
      // Move player with 'w', 'a', 's', 'd'
      ['w', () => this.movePlayer(MoveDirection.Forward)],
      ['a', () => this.movePlayer(MoveDirection.Left)],
      ['s', () => this.movePlayer(MoveDirection.Backward)],
      ['d', () => this.movePlayer(MoveDirection.Right)],

      // Open/close inventory with 'i'
      ['i', () => this.toggleInventory()],

      // Attack Enemy
      ['q', () => this.attack()],

      // Select inventory weapon/item with '1'-'9'
      [
        ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5',
          'Digit6', 'Digit7', 'Digit8', 'Digit9'],
        ({ key }: KeyboardEvent) => this.selectFromInventory(Number(key) - 1),
      ],
    ]);
    this.cameraController.bindKeys(this.keyListener);
    this.keyListener.startListening();

    this.message = '';

    this.addMessage('Game Start');
    this.printGame();

    // Begin rendering
    requestAnimationFrame((time) => {
      this.renderer.render(time);
    });
  }

  stopGame(): void {
    this.keyListener.stopListening();
    this.renderer.stopRendering();
  }

  // update(handler?: Function): void {
  //   if (handler) handler();
  // }
  //
  private movePlayer(dir: MoveDirection): void {
    if (this.state !== State.WALKING) return;

    let deltaX = 0;
    let deltaY = 0;
    switch (dir) {
      case MoveDirection.Forward:
        this.player.modelNode.localTransform.rotation = [0, 0, 0];
        deltaY = 1;
        break;
      case MoveDirection.Backward:
        this.player.modelNode.localTransform.rotation = [0, 180, 0];
        deltaY = -1;
        break;
      case MoveDirection.Left:
        this.player.modelNode.localTransform.rotation = [0, 90, 0];
        deltaX = 1;
        break;
      case MoveDirection.Right:
        this.player.modelNode.localTransform.rotation = [0, -90, 0];
        deltaX = -1;
        break;
      default:
        break;
    }

    const { x: currentX, y: currentY } = this.grid.getPositionOf(this.player);
    const newPosition = {
      x: currentX + deltaX,
      y: currentY + deltaY,
    };

    const { entity, collision } = this.grid.query(newPosition);

    // Check for entities
    if (entity) {
      switch (entity.constructor) {
        case Enemy: {
          const enemy = <Enemy> entity;

          this.addMessage(`You bump into ${Game.nounPhrase(enemy)} ${enemy.stringRepresentation()}`);

          break;
        }

        case Weapon: {
          const weapon = <Weapon> entity;

          this.player.pickUpWeapon(weapon);
          this.grid.removeEntity(weapon);
          this.addMessage(`You pick up ${Game.nounPhrase(weapon)}`);
          break;
        }
        case Item: {
          // Pick up item
          const item = <Item> entity;

          this.player.pickUpItem(item);
          this.grid.removeEntity(item);
          this.addMessage(`You pick up ${Game.nounPhrase(item)}`);
          break;
        }
        default:
          break;
      }
    }

    // Check for collision
    if (!collision) {
      this.grid.moveEntity(this.player, newPosition);
    }

    const newCameraPosition = this.player.cameraTarget.getWorldPosition();
    this.cameraController.moveTo(newCameraPosition);
    this.postTurn();
    this.printGame();
  }

  private moveCamera(translation: v3.Vec3) {
    const { position } = this.renderer.camera.transform;
    v3.add(position, translation, position);
    return position;
  }

  private attack() : void {
    if (this.state !== State.WALKING) return;

    // Search for an enemy withing the nearest four tiles
    const range = [0, -1, -1, 0, 0, 1, 1, 0];
    let enemy: Enemy;

    const { x: playerX, y: playerY } = this.grid.getPositionOf(this.player);

    for (let i = 0; i < range.length; i += 2) {
      const checkPosition = {
        x: playerX + range[i],
        y: playerY + range[i + 1],
      };

      const entity = this.grid.getEntityAt(checkPosition);

      if (entity && entity instanceof Enemy) {
        enemy = <Enemy> entity;
        break;
      }
    }

    if (!enemy) {
      this.addMessage('No Enemies in Range');
      this.printGame();
      return;
    }

    if (!this.player.equippedWeapon) {
      this.addMessage('No Weapon Equipped');
      this.printGame();
      return;
    }

    enemy.combatTimer = 7;

    // Player attack
    let rand = 1 + Math.floor((Math.random() * 5));
    const SP = this.player.skill + rand + this.player.equippedWeapon.skillBonus;

    if (SP > enemy.skill) {
      // Attack hit
      enemy.health -= this.player.equippedWeapon.damage;

      this.addMessage(`${enemy.name} took ${this.player.equippedWeapon.damage} damage. ${enemy.name} has ${Math.max(enemy.health, 0)} health remaining`);

      if (enemy.health <= 0) {
        // Enemy defeated
        this.player.skill += 1;
        this.grid.removeEntity(enemy);
        this.addMessage(`${enemy.name} has been defeated`);

        if (this.grid.getEntities().enemies.size === 0) {
          this.addMessage('All Enemies Defeated');
          this.addMessage('You Win');
          this.stopGame();
        }
        this.printGame();
        return;
      }
    } else {
      // Attack miss
      this.addMessage('Attack Missed. No damage dealt');
    }

    // Enemy attack
    rand = 1 + Math.floor((Math.random() * 5));
    const enemySP = enemy.skill + rand;

    if (enemySP > SP) {
      // Attack hit
      this.player.health -= enemy.damage;
      this.addMessage(`${enemy.name} deals ${enemy.damage} damage`);

      if (this.player.health <= 0) {
        this.addMessage('You Died.\nGame Over.');
        this.printGame();
        this.stopGame();
        return;
      }
    } else {
      // Arrack miss
      this.addMessage(`${enemy.name} misses. No damage dealt`);
    }

    this.postTurn();
    this.printGame();
  }

  private toggleInventory(): void {
    if (this.state === State.INVENTORY) {
      // Close inventory
      this.state = State.WALKING;
    } else {
      // Open inventory
      this.addMessage('You look at your inventory');
      this.state = State.INVENTORY;
    }

    this.printGame();
  }

  private selectFromInventory(index: number): void {
    if (this.state !== State.INVENTORY) return;
    // if (index >= this.player.inventory.weapons.length) return;
    if (index >= this.player.inventory.inventory.length) return;

    // const weapon = this.player.inventory.weapons[index];
    const inventoryObj = this.player.inventory.inventory[index];

    if (inventoryObj instanceof Weapon) {
      const weapon = <Weapon> inventoryObj;

      if (this.player.equippedWeapon === weapon) {
        this.message += `"You already have this ${weapon.name} equipped"\n`;
        this.printGame();
        return;
      }

      this.player.equippedWeapon = weapon;

      this.addMessage(`You equip ${Game.nounPhrase(weapon)}`);
    } else if (inventoryObj instanceof Item) {
      const item = <Item> inventoryObj;

      this.player.health += item.effectHP;
      this.player.skill += item.effectSP;
      this.player.useUpItem(item);

      this.message += `Use Item: ${item.name} : ${item.description}`;
    }

    this.postTurn();
    this.printGame();
  }

  private addMessage(message: string): void {
    this.message += `"${message}"\n`;
  }

  private postTurn(): void {
    this.grid.getEntities().enemies.forEach((enemy) => {
      enemy.combatTimer -= 1;
      if (enemy.combatTimer > 0) return;
      const { x: currentX, y: currentY } = this.grid.getPositionOf(enemy);
      const range = [0, -1, -1, 0, 0, 1, 1, 0];
      const randPos = Math.floor(Math.random() * 4) * 2;

      const newPosition = {
        x: currentX + range[randPos],
        y: currentY + range[randPos + 1],
      };

      const { entity, collision } = this.grid.query(newPosition);

      if (entity || collision) return;

      this.grid.moveEntity(enemy, newPosition);
    });
  }

  private printGame(): void {
    /* eslint-disable no-console */
    // Grid
    // console.log(this.grid.stringRepresentation());

    // Player stats
    console.log(this.player.stringRepresentation());

    if (this.player.equippedWeapon) {
      // Equpped weapon
      console.log('Equipped weapon:', this.player.equippedWeapon.stringRepresentation());
    }

    if (this.message) {
      // Message
      console.log(this.message);
      this.message = '';
    }

    if (this.state === State.INVENTORY) {
      // Inventory
      console.log(this.player.inventory.stringRepresentation());
    }
    /* eslint-enable no-console */
  }

  private static nounPhrase<Type extends { name: string }>(object: Type): string {
    if (Game.isVowel(object.name.charAt(0))) {
      return `an ${object.name}`;
    }
    return `a ${object.name}`;
  }

  private static isVowel(character: string): boolean {
    return 'aeiou'.split('').includes(character.charAt(0).toLowerCase());
  }
}
