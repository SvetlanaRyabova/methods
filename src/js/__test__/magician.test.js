import Magician from '../magician.js';
import Character from '../base.js';

test('Magician should be example of class', () => {
  expect(new Magician({ name: 'Mag', type: 'Magician' })).toBeInstanceOf(Character);
});

test('test function LevelUp for Magician', () => {
  const mag = new Magician({ name: 'Mag', type: 'Magician' });
  const received = mag.levelUp();
  const expected = {
    name: 'Mag',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  expect(received).toEqual(expected);
});

test('test function damage for Magician', () => {
  const mag = new Magician({ name: 'Mag', type: 'Magician' });
  const received = mag.damage(10);
  const expected = {
    name: 'Mag',
    type: 'Magician',
    health: 94,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
