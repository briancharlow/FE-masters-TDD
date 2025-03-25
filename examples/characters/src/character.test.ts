import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

describe('Character', () => {
  it(
    'should create a character with a first name, last name, and role',
    () => {
      const character = new Character('John', 'Doe', 'Warrior');
      expect(character).toBeInstanceOf(Character);
      expect(character).toBeInstanceOf(Person);
      expect(character.firstName).toBe('John');
      expect(character.lastName).toBe('Doe');
      expect(character.role).toBe('Warrior');
      
    },
  );

  it('should allow you to increase the level', () => {
    const character = new Character('Brian', 'Kyalo', 'Warrior');
    character.levelUp();
    expect(character.level).toBe(2);
  });

  it('should update the last modified date when leveling up', (
  ) => {
    const character = new Character('Brian', 'Kyalo', 'Warrior');
    const prevModified = character.lastModified;
    character.levelUp();
    expect(character.lastModified).not.toBe(prevModified);
  });
});
