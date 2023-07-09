export class Character {
  constructor(name, type) {
    // Проверяем корректность значения name
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Некорректное значение имени');
    }

    // Проверяем корректность значения type
    const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!allowedTypes.includes(type)) {
      throw new Error('Некорректное значение типа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0; // Значение attack будет установлено в дочерних классах
    this.defence = 0; // Значение defence будет установлено в дочерних классах
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

export class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}