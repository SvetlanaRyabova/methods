import Undead from '../undead.js';
import Character from '../base.js';

test('Undead should be example of class', () => {
  expect(new Undead({ name: 'Und', type: 'Undead' })).toBeInstanceOf(Character);
});

test('test function LevelUp for Undead', () => {
  const und = new Undead({ name: 'Und', type: 'Undead' });
  const received = und.levelUp();
  const expected = {
    name: 'Und',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(received).toEqual(expected);
});

test('test function damage for Undead', () => {
    const und = new Undead({ name: 'Und', type: 'Undead' });
  const received = und.damage(10);
  const expected = {
    name: 'Und',
    type: 'Undead',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25
};
  expect(received).toEqual(expected);
});
