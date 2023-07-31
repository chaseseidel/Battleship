import Gameboard from "./gameboard";
import Ship from "./ship";

export default class Player {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard();
    this.turn = false;
  }

  isTurn() {
    return this.turn;
  }

  changeTurn() {
    if (this.turn) {
      this.turn = false;
    } else {
      this.turn = true;
    }
  }

  incomingAttack(position) {
    this.board.receiveAttack(position);
  }

  attackPlayer(player, position) {
    player.board.receiveAttack(position);
  }

  randomAttack(player) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    try {
      player.board.receiveAttack([x, y]);
      return [x, y];
    } catch (e) {
      this.randomAttack(player);
    }
  }

  randomShip(length) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let direction;

    let odds = Math.floor(Math.random() * 10);
    if (odds < 5) {
      direction = "x";
    } else {
      direction = "y";
    }

    try {
      this.board.placeShip(new Ship(length), [x, y], direction);
    } catch (e) {
      this.randomShip(length);
    }
  }

  randomFleet() {
    for (let i = 0; i < 2; i++) {
      this.randomShip(3);
    }

    this.randomShip(2);
    this.randomShip(4);
    this.randomShip(5);
  }
}
