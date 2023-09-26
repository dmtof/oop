export class Character {
    constructor(name, type) {
        // Проверяем корректность значения name
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Некорректное значение имени');
        }

        const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!allowedTypes.includes(type)) {
            throw new Error('Некорректное значение типа');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined; // Значение attack будет установлено в дочерних классах
        this.defence = undefined; // Значение defence будет установлено в дочерних классах
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Невозможно повысить левел умершего');
        }

        this.level += 1;
        this.attack *= 1.2; // Увеличиваем атаку на 20%
        this.defence *= 1.2; // Увеличиваем защиту на 20%
        this.health = 100;
    }

    damage(points) {
        if (this.health === 0) {
            throw new Error('Нельзя нанести урон умершему');
        }

        const damage = points * (1 - this.defence / 100);
        this.health -= damage;

        if (this.health < 0) {
            this.health = 0;
        }
    }
}