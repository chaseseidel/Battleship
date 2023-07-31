import Player from "./player";
import Ship from "./ship";

const testShips1 = [
  new Ship(2),
  new Ship(3),
  new Ship(3),
  new Ship(4),
  new Ship(5),
];

const testShips2 = [
  new Ship(2),
  new Ship(3),
  new Ship(3),
  new Ship(4),
  new Ship(5),
];

const testPositions = [
  [0, 0],
  [1, 3],
  [2, 5],
  [6, 1],
  [8, 2],
];

const testDirections = ["x", "x", "x", "y", "y"];

export default function playGame() {
  const player = new Player("Bob");
  const computer = new Player("AI");

  player.board.createBoard();
  computer.board.createBoard();

  player.changeTurn();

  testShips1.forEach((ship, index) => {
    player.board.placeShip(ship, testPositions[index], testDirections[index]);
  });

  testShips2.forEach((ship, index) => {
    computer.board.placeShip(ship, testPositions[index], testDirections[index]);
  });

  player.board.printBoard();
  computer.board.printBoard();

  while (!player.board.allShipsSunk() && !computer.board.allShipsSunk()) {
    if (player.board.allShipsSunk() && !computer.board.allShipsSunk()) {
      console.log("Potential draw");
      player.randomAttack(computer);
      if (computer.board.allShipsSunk()) {
        console.log("It's a draw!");
      }
      break;
    }

    if (!player.board.allShipsSunk() && computer.board.allShipsSunk()) {
      console.log("Potential draw");
      computer.randomAttack(player);
      if (player.board.allShipsSunk()) {
        console.log("It's a draw!");
      }
      break;
    }

    if (player.isTurn()) {
      player.randomAttack(computer);
      player.changeTurn();
      computer.changeTurn();
    } else {
      computer.randomAttack(player);
      computer.changeTurn();
      player.changeTurn();
    }
  }

  if (computer.board.allShipsSunk()) {
    console.log("Player won");
  } else {
    console.log("Computer won");
  }

  player.board.printBoard();
  computer.board.printBoard();
}
