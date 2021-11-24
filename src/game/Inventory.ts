class Item {
    name: string;
    dmg: number;
    skillBonus: number;

    constructor(name: string) {
        this.name = name;
    }

    setStats(dmg :number, skillBonus: number) {
        this.dmg = dmg;
        this.skillBonus = skillBonus;
    }
}

export default class Inventory {
    private inventory = [];

    getInv() {
        return this.inventory;
    }

    pickUpItem(name: string) {
        let item = new Item(name);

        switch(item.name) {
            case 'Dagger':
                item.setStats(3, 0);
                break;
            case 'Cast Iron Pan':
                item.setStats(7, 1);
                break;
            case 'War Hammer':
                item.setStats(12, -1);
                break;
            case 'Hatchet':
                item.setStats(3, 4);
                break;
            case 'Battleaxe':
                item.setStats(10, 2);
                break;
            case 'Sword':
                item.setStats(7, 3);
                break;
            case 'Baton':
                item.setStats(2, 7);
                break;
            case 'Battle Staff':
                item.setStats(6, 3);
                break;
            default:
                item.setStats(0,0);
        }
        this.inventory.push(item);
    }
}