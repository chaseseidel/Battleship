export default class Gameboard {
  constructor() {
    this.board = [];
    this.ships = [];
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
      this.ships.push(ship);
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
      this.ships.push(ship);
    }
  }

  receiveAttack(position) {
    if (
      (position[0] > 9 || position[0] < 0) ||
      (position[1] > 9 || position[1] < 0)
    ) {
      throw new Error("Shot is out of bounds");
    }
    if (this.board[position[0]][position[1]] === 0) {
      this.board[position[0]][position[1]] = 1;
    } else if (this.board[position[0]][position[1]] !== 1) {
      this.board[position[0]][position[1]].hit(position);
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

  // printBoard() {
  //   let totalBoard = "";
  //   for (let i = 0; i < 10; i++) {
  //     let board = "";
  //     for (let j = 0; j < 10; j++) {
  //       if (typeof this.board[i][j] === "object") {
  //         board += "X ";
  //       } else {
  //         board += `${this.board[i][j]} `;
  //       }
  //     }
  //     totalBoard += board + "\n";
  //   }

  //   console.log(totalBoard);
  // }
}
