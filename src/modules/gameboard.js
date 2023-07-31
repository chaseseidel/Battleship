export default class Gameboard {
  constructor() {
    this.board = [];
  }

  createBoard() {
    for (let i = 0; i < 10; i++) {
      const array = [];
      for (let i = 0; i < 10; i++) {
        array.push(0);
      }
      this.board.push(array);
    }
  }

  placeShip(ship, position, direction) {
    if (direction === "x") {
      if (position[0] + ship.length > 9) {
        throw new Error("Ship cannot be placed there");
      }

      for (let i = 0; i < ship.length; i++) {
        if (this.board[position[0] + i][position[1]] !== 0) {
          throw new Error("Ship cannot be placed there");
        }
        this.board[position[0] + i][position[1]] = ship;
      }
    } else {
      if (position[1] + ship.length > 9) {
        throw new Error("Ship cannot be placed there");
      }

      for (let i = 0; i < ship.length; i++) {
        if (this.board[position[0]][position[1] + i] !== 0) {
          throw new Error("Ship cannot be placed there");
        }

        this.board[position[0]][position[1] + i] = ship;
      }
    }
  }

  receiveAttack(position) {
    if (this.board[position[0]][position[1]] === 0) {
      this.board[position[0]][position[1]] = 1;
    } else if (this.board[position[0]][position[1]] !== 1) {
      this.board[position[0]][position[1]].hit(position);
    }
  }
}
