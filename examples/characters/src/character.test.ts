import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';



const firstName = 'John';
const lastName = 'Doe';
const role = 'Warrior';

describe('Character', () => {

  let character;

  beforeEach(() => {
     character = new Character(firstName, lastName, role);
  });
  it(
    'should create a character with a first name, last name, and role',
    () => {

     
      expect(character).toBeInstanceOf(Character);
      expect(character).toBeInstanceOf(Person);
      expect(character.firstName).toBe(firstName);
      expect(character.lastName).toBe(lastName);
      expect(character.role).toBe(role);

      expect(character).toEqual(expect.objectContaining({
        firstName,
        lastName,
        role,
        charisma: expect.any(Number),
        strength: expect.any(Number),
        dexterity: expect.any(Number),
        createdAt: expect.any(Date),
      }));
      
    },
  );

  it('should allow you to increase the level', () => {
   
    character.levelUp();
    expect(character.level).toBe(2);
  });

  it('should update the last modified date when leveling up', (
  ) => {
  
    const prevModified = character.lastModified;
    character.levelUp();
    expect(character.lastModified).not.toBe(prevModified);
  });
});
