import Daemon from '../daemon.js';
import Character from '../base.js';

test('Daemon should be example of class', () => {
  expect(new Daemon({ name: 'Dae', type: 'Daemon' })).toBeInstanceOf(Character);
});

test('test function LevelUp for Daemon', () => {
  const dae = new Daemon({ name: 'Dae', type: 'Daemon' });
  const received = dae.levelUp();
  const expected = {
    name: 'Dae',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  expect(received).toEqual(expected);
});

test('test function damage for Daemon', () => {
  const dae = new Daemon({ name: 'Dae', type: 'Daemon' });
  const received = dae.damage(10);
  const expected = {
    name: 'Dae',
    type: 'Daemon',
    health: 94,
    level: 1,
    attack: 10,
    defence: 40
};
  expect(received).toEqual(expected);
});
