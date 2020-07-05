import Bowman from './js/bowman.js';
import Daemon from './js/daemon.js';
import Magician from './js/magician.js';
import Swordsman from './js/swordsman.js';
import Undead from './js/undead.js';
import Zombie from './js/zombie.js';
// import html from './index.html';

const bowman = new Bowman({ name: 'Bow', type: 'Bowman' });
const daemon = new Daemon({ name: 'Dae', type: 'Daemon' });
const magician = new Magician({ name: 'Mag', type: 'Magician' });
const swordsman = new Swordsman({ name: 'Sword', type: 'Swordsman' });
const undead = new Undead({ name: 'Und', type: 'Undead' });
const zombie = new Zombie({ name: 'pete', type: 'Zombie' });

console.log(bowman);
bowman.damage(10);
console.log(bowman);
bowman.damage(10);
console.log(bowman);
