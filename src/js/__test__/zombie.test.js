import Zombie from '../zombie.js';
import Character from '../base.js';

test('Zombie should be example of class', () => {
  expect(new Zombie({ name: 'Zomb', type: 'Zombie' })).toBeInstanceOf(Character);
});

test('test function LevelUp for Zombie', () => {
  const zomb = new Zombie({ name: 'Zomb', type: 'Zombie' });
  const received = zomb.levelUp();
  const expected = {
    name: 'Zomb',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };
  expect(received).toEqual(expected);
});

test('test function damage for Zombie', () => {
  const zomb = new Zombie({ name: 'Zomb', type: 'Zombie' });
  const received = zomb.damage(10);
  const expected = {
    name: 'Zomb',
    type: 'Zombie',
    health: 91,
    level: 1,
    attack: 40,
    defence: 10
};
  expect(received).toEqual(expected);
});