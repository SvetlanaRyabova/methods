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
  const stringName = { name: '', type: 'Bowman' };
  const errType = { name: 'Bow', type: 'Bow' };
  const arr = [numberName, stringName, errType];
  expect(() => {
    arr.forEach( value => {
      new Character(value)
    });
  }).toThrow();
});

test('test function LevelUp for Character', () => {
  const bow = new Character({
    name: 'Bow',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25, });

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
        defence: 25, });
    const received = bow.damage(10);
    const expected = undefined;
    expect(received).toEqual(expected);
  });