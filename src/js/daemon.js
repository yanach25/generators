import Character from './character';
import types from './app';

class Daemon extends Character {
  constructor(...args) {
    super(...args);
    this.health = 50;
    this.attack = 10;
    this.defence = 40;
    this.type = types.Daemon;
  }
}

export default Daemon;
