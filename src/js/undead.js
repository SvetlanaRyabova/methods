import Character from './base.js';

export default class Undead extends Character {
  constructor(options) {
    super(options);
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
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
