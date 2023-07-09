import {Character} from '../Classes';

describe('Character', () => {
  it('should create a character with default values', () => {
    const character = new Character('John', 'Bowman');
    
    expect(character.name).toBe('John');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(0);
    expect(character.defence).toBe(0);
  });

  it('should level up the character', () => {
    const character = new Character('John', 'Bowman');
    character.levelUp();
    
    expect(character.level).toBe(2);
    expect(character.health).toBe(100);
  });

  it('should not level up a dead character', () => {
    const character = new Character('John', 'Bowman');
    character.health = 0;
    
    expect(() => character.levelUp()).toThrowError('Невозможно повысить левел умершего');
  });

  it('should damage the character', () => {
    const character = new Character('John', 'Bowman');
    character.damage(50);
    
    expect(character.health).toBe(50);
  });

  it('should not damage a dead character', () => {
    const character = new Character('John', 'Bowman');
    character.health = 0;
    
    expect(() => character.damage(50)).toThrowError('Нельзя нанести урон умершему');
  });
});