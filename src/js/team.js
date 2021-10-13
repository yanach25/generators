export default class Team {
  constructor() {
    this.currentTeam = [];
  }

  add(person) {
    this.currentTeam.push(person);
  }

  * [Symbol.iterator]() { // сокращение для [Symbol.iterator]: function*()
    for (let value = 0; value <= this.currentTeam.length; value += 1) {
      yield this.currentTeam[value];
    }
  }
}
