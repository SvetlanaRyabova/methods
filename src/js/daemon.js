import Character from './base.js';

export default class Daemon extends Character {
  constructor(options) {
    super(options);
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }

  levelUp() {
    super.levelUp();
    return this;
  }

  damage(points) {
    super.damage(points);
    return this;
  }
}
