export default class Gameboard {
  constructor() {
    this.board = [];
    this.ships = [];
    this.hits = new Set();
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
      if (position[0] + ship.length > 10) {
        throw new Error("Ship cannot be placed there");
      }

      for (let i = 0; i < ship.length; i++) {
        if (this.board[position[0] + i][position[1]] !== 0) {
          throw new Error("Ship cannot be placed there");
        }
        this.board[position[0] + i][position[1]] = ship;
      }
      this.ships.push(ship);
    } else {
      if (position[1] + ship.length > 10) {
        throw new Error("Ship cannot be placed there");
      }

      for (let i = 0; i < ship.length; i++) {
        if (this.board[position[0]][position[1] + i] !== 0) {
          throw new Error("Ship cannot be placed there");
        }

        this.board[position[0]][position[1] + i] = ship;
      }
      this.ships.push(ship);
    }
  }

  receiveAttack(position) {
    if (
      position[0] > 9 ||
      position[0] < 0 ||
      position[1] > 9 ||
      position[1] < 0
    ) {
      throw new Error("Shot is out of bounds");
    }
    if (this.board[position[0]][position[1]] === 0) {
      this.board[position[0]][position[1]] = 1;
      this.hits.add(`[${position[0]},${position[1]}]`);
    } else if (this.board[position[0]][position[1]] !== 1) {
      this.board[position[0]][position[1]].hit(position);
      this.hits.add(`[${position[0]},${position[1]}]`);
    } else {
      throw new Error("This spot was already shot at!");
    }
  }

  allShipsSunk() {
    let check = true;

    this.ships.forEach((ship) => {
      if (!ship.isSunk()) {
        check = false;
      }
    });

    return check;
  }

  mostRecentHit() {
    return [...this.hits][this.hits.size - 1];
  }

  printBoard() {
    let totalBoard = "";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let board = "";
        if (typeof this.board[j][i] === "object") {
          board += "X ";
        } else {
          board += `${this.board[j][i]} `;
        }
        totalBoard += board;
      }
      totalBoard += "\n";
    }
    console.log(totalBoard);
  }
}
