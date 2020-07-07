import Character from '../base.js';

// test('should be example of class', () => {
//   expect(new Bowman({ name: 'Bow', type: 'Bowman' })).toBeInstanceOf(Character);
// });

// test('should be example of class', () => {
//   expect(new Daemon({ name: 'Bow', type: 'Daemon' })).toBeInstanceOf(Character);
// });

// test('should be example of class', () => {
//   expect(new Magician({ name: 'Bow', type: 'Magician' })).toBeInstanceOf(Character);
// });

// test('should be example of class', () => {
//   expect(new Swordsman({ name: 'Bow', type: 'Swordsman' })).toBeInstanceOf(Character);
// });

// test('should be example of class', () => {
//   expect(new Undead({ name: 'Bow', type: 'Undead' })).toBeInstanceOf(Character);
// });

// test('should be example of class', () => {
//   expect(new Zombie({ name: 'Bow', type: 'Zombie' })).toBeInstanceOf(Character);
// });

test('throws in name', () => {
  const numberName = { name: 1, type: 'Bowman' };
  expect(() => {
    const bow = new Character(numberName);
    return bow;
  }).toThrow();
});
test('throws in name', () => {
  const stringName = { name: '', type: 'Bowman' };

  expect(() => {
    const bow = new Character(stringName);
    return bow;
  }).toThrow();
});
test('throws in type', () => {
  const errType = { name: 'Bow', type: 'Bow' };

  expect(() => {
    const bow = new Character(errType);
    return bow;
  }).toThrow();
});

test('throws in levelUp', () => {
  const errType = { name: 'Bow', type: 'Bowman' };

  expect(() => {
    const bow = new Character(errType);
    bow.level = 0;
    bow.levelUp();
  }).toThrow();
});

test('test function LevelUp for Character', () => {
  const bow = new Character({
    name: 'Bow',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });

  const received = bow.levelUp();
  const expected = undefined;
  expect(received).toEqual(expected);
});

test('test function damage for Character', () => {
  const bow = new Character({
    name: 'Bow',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
  const received = bow.damage(10);
  const expected = undefined;
  expect(received).toEqual(expected);
});
