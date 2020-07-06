import Swordsman from '../swordsman.js';
import Character from '../base.js';

test('Swordsman should be example of class', () => {
  expect(new Swordsman({ name: 'Sword', type: 'Swordsman' })).toBeInstanceOf(Character);
});

test('test function LevelUp for Swordsman', () => {
  const sword = new Swordsman({ name: 'Sword', type: 'Swordsman' });
  const received = sword.levelUp();
  const expected = {
    name: 'Sword',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };
  expect(received).toEqual(expected);
});

test('test function damage for Magician', () => {
  const sword = new Swordsman({ name: 'Sword', type: 'Swordsman' });
  const received = sword.damage(10);
  const expected = {
    name: 'Sword',
    type: 'Swordsman',
    health: 91,
    level: 1,
    attack: 40,
    defence: 10
};
  expect(received).toEqual(expected);
});
