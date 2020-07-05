import Character from './base.js';

export default class Magician extends Character {
  constructor(options) {
    super(options);
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }
}
