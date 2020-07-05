export default class Character {
  // Функция конструктор
  constructor(options) {
    this.name = options.name;
    this.type = options.type;
    this.health = options.health;
    this.level = options.level;
    this.attack = options.attack;
    this.defence = options.defence;

    if (typeof this.name !== 'string' || this.name.length > 10 || this.name.length < 1) {
      throw new Error(`name ${this.name} не соответствует требованиям`);
    }
    const arrType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    let value = 0;
    arrType.forEach((arr) => {
      if (arr === this.type) {
        // eslint-disable-next-line no-plusplus
        ++value;
      }
    });
    if (value === 0) {
      throw new Error(`type ${this.type} не соответствует требованиям`);
    }
  }

  levelUp() {
    if (this.level > 0) {
      // eslint-disable-next-line no-plusplus
      this.level = ++this.level;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
