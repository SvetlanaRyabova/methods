import Bowman from '../bowman.js';
import Character from '../base.js';

test('Bowman should be example of class', () => {
  expect(new Bowman({ name: 'Bow', type: 'Bowman' })).toBeInstanceOf(Character);
});

test('test function LevelUp for Bowman', () => {
  const bow = new Bowman({ name: 'Bow', type: 'Bowman' });
  const received = bow.levelUp();
  const expected = {
    name: 'Bow',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(received).toEqual(expected);
});

test('test function damage for Bowman', () => {
  const bow = new Bowman({ name: 'Bow', type: 'Bowman' });
  const received = bow.damage(10);
  const expected = {
    name: 'Bow',
    type: 'Bowman',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
