import Character from './character';
import types from './app';

class Zombie extends Character {
  constructor(...args) {
    super(...args);
    this.health = 50;
    this.attack = 40;
    this.defence = 10;
    this.type = types.Zombie;
  }
}

export default Zombie;
