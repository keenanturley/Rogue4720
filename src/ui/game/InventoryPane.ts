/* eslint-disable import/no-cycle */
import Item from '../../game/entities/Item';
import Weapon from '../../game/entities/Weapon';
import Game, { GameState } from '../../game/Game';

export default class InventoryPane extends HTMLElement {
  titleElement: HTMLDivElement;

  itemsWrapper: HTMLDivElement;

  constructor(private game: Game) {
    super();

    this.className = 'game-pane';

    this.titleElement = InventoryPane.createTitleElement();
    this.appendChild(this.titleElement);

    this.itemsWrapper = document.createElement('div');
    this.appendChild(this.itemsWrapper);

    this.update();
  }

  static createTitleElement(): HTMLDivElement {
    const element = document.createElement('div');
    element.className = 'pane-title';
    element.innerText = 'Inventory';
    return element;
  }

  createInventoryElements(): Array<HTMLDivElement> {
    const inventoryElements = this.game.player.inventory.inventory.map((entity, index) => {
      const wrapperElement = document.createElement('div');
      wrapperElement.className = 'inventory-entity-wrapper';

      const labelElement = document.createElement('div');
      wrapperElement.appendChild(labelElement);
      const bodyElement = document.createElement('div');
      wrapperElement.appendChild(bodyElement);
      if (entity instanceof Weapon) {
        const weapon = entity as Weapon;
        labelElement.innerHTML = `<strong>${index + 1}. (Weapon) ${weapon.name}</strong>`;
        bodyElement.innerText = `Damage: ${weapon.damage}, Skill Bonus: ${weapon.skillBonus}`;
      } else if (entity instanceof Item) {
        const item = entity as Item;
        labelElement.innerHTML = `<strong>${index + 1}. (Item) ${item.name}`;
        bodyElement.innerText = `${item.description}`;
      }
      return wrapperElement;
    });
    return inventoryElements;
  }

  setVisibility(isVisible: boolean) {
    this.style.display = isVisible ? '' : 'none';
  }

  update() {
    this.setVisibility(this.game.state === GameState.INVENTORY);
    this.itemsWrapper.replaceChildren(...this.createInventoryElements());
  }
}

customElements.define('inventory-pane', InventoryPane);
