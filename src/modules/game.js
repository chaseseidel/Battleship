import Player from "./player";
import Ship from "./ship";
import DOM from "./dom";

const shipLengths = [2, 3, 3, 4, 5];

const playerShips = [];

let direction = "x";

// export default function playGame() {
//   const player = new Player("Bob");
//   const computer = new Player("AI");

//   player.board.createBoard();
//   computer.board.createBoard();

//   player.changeTurn();

//   testShips1.forEach((ship, index) => {
//     player.board.placeShip(ship, testPositions[index], testDirections[index]);
//   });

//   testShips2.forEach((ship, index) => {
//     computer.board.placeShip(ship, testPositions[index], testDirections[index]);
//   });

//   player.board.printBoard();
//   computer.board.printBoard();

//   while (!player.board.allShipsSunk() && !computer.board.allShipsSunk()) {
//     if (player.board.allShipsSunk() && !computer.board.allShipsSunk()) {
//       console.log("Potential draw");
//       player.randomAttack(computer);
//       if (computer.board.allShipsSunk()) {
//         console.log("It's a draw!");
//       }
//       break;
//     }

//     if (!player.board.allShipsSunk() && computer.board.allShipsSunk()) {
//       console.log("Potential draw");
//       computer.randomAttack(player);
//       if (player.board.allShipsSunk()) {
//         console.log("It's a draw!");
//       }
//       break;
//     }

//     if (player.isTurn()) {
//       player.randomAttack(computer);
//       player.changeTurn();
//       computer.changeTurn();
//     } else {
//       computer.randomAttack(player);
//       computer.changeTurn();
//       player.changeTurn();
//     }
//   }

//   if (computer.board.allShipsSunk()) {
//     console.log("Player won");
//   } else {
//     console.log("Computer won");
//   }

//   player.board.printBoard();
//   computer.board.printBoard();
// }

export default function playGame() {
  const player = new Player("Bob");
  const computer = new Player("AI");

  player.board.createBoard();
  computer.board.createBoard();

  player.changeTurn();

  const boards = document.querySelectorAll(".board");
  const playerBoard = boards[0];
  const computerBoard = boards[1];
  let playerTiles = playerBoard.querySelectorAll(".tile");
  const computerTiles = computerBoard.querySelectorAll(".tile");

  computer.randomFleet();
  addPlayerShips(player);

  player.board.printBoard();

  //   while (!player.board.allShipsSunk() && !computer.board.allShipsSunk()) {
  //     if (player.board.allShipsSunk() && !computer.board.allShipsSunk()) {
  //       console.log("Potential draw");
  //       player.randomAttack(computer);
  //       if (computer.board.allShipsSunk()) {
  //         console.log("It's a draw!");
  //       }
  //       break;
  //     }

  //     if (!player.board.allShipsSunk() && computer.board.allShipsSunk()) {
  //       console.log("Potential draw");
  //       const attack = computer.randomAttack(player);
  //       DOM.markAttack(playerTiles, attack);
  //       if (player.board.allShipsSunk()) {
  //         console.log("It's a draw!");
  //       }
  //       break;
  //     }

  //     if (player.isTurn()) {
  //       player.randomAttack(computer);
  //       player.changeTurn();
  //       computer.changeTurn();
  //     } else {
  //       computer.randomAttack(player);
  //       const attack = getAttack(player);
  //       DOM.markAttack(playerTiles, attack);
  //       computer.changeTurn();
  //       player.changeTurn();
  //     }
  //   }

  //   if (computer.board.allShipsSunk()) {
  //     console.log("Player won");
  //   } else {
  //     console.log("Computer won");
  //   }

  //   player.board.printBoard();
  //   computer.board.printBoard();
}

export function preGame() {
  const modal = document.querySelector(".place-ships-modal");
  const fakeModal = document.querySelector(".place-ships-modal-fake");
  const playerBoard = modal.querySelector(".board");
  const fakePlayerBoard = fakeModal.querySelector(".board");
  let playerTiles = playerBoard.querySelectorAll(".tile");
  let fakePlayerTiles = fakePlayerBoard.querySelectorAll(".tile");

  const fakeRotate = document.getElementById("fake-rotate");
  fakeRotate.addEventListener("click", () => {
    if (direction === "x") {
      direction = "y";
    } else {
      direction = "x";
    }

    DOM.removeEventListeners(playerTiles);
    DOM.removeEventListeners(fakePlayerTiles);
    playerTiles = playerBoard.querySelectorAll(".tile");
    fakePlayerTiles = fakePlayerBoard.querySelectorAll(".tile");
    fakePlayerTiles.forEach((tile, index) => {
      if (playerTiles[index].classList.contains("ship")) {
        tile.className = "tile fake-ship";
      }
    });
    fakePlayerTiles.forEach((tile, index) => {
      tile.addEventListener("click", () => {
        if (!tile.classList.contains("miss")) {
          playerBoard.click();
          playerTiles[index].click();
          DOM.toggleFakeModal();
        }
      });
    });
    DOM.playerPlacesShip(
      playerTiles,
      shipLengths[0],
      direction,
      shipLengths,
      playerShips
    );
    playerTiles.forEach((tile) => {
      tile.addEventListener("click", () => DOM.toggleFakeModal());
    });
    DOM.addInteractiveBoard(fakePlayerTiles, shipLengths[0], direction);
  });

  DOM.addInteractiveBoard(fakePlayerTiles, shipLengths[0], direction);
  fakePlayerTiles.forEach((tile, index) => {
    tile.addEventListener("click", () => {
      if (!tile.classList.contains("miss")) {
        playerBoard.click();
        playerTiles[index].click();
        DOM.toggleFakeModal();
      }
    });
  });

  playerBoard.addEventListener("click", () => {
    DOM.removeEventListeners(playerTiles);
    DOM.removeEventListeners(fakePlayerTiles);
    playerTiles = playerBoard.querySelectorAll(".tile");
    fakePlayerTiles = fakePlayerBoard.querySelectorAll(".tile");
    fakePlayerTiles.forEach((tile, index) => {
      if (playerTiles[index].classList.contains("ship")) {
        tile.className = "tile fake-ship";
      }
    });
    fakePlayerTiles.forEach((tile, index) => {
      tile.addEventListener("click", () => {
        if (!tile.classList.contains("miss")) {
          playerBoard.click();
          playerTiles[index].click();
          DOM.toggleFakeModal();
        }
      });
    });
    DOM.playerPlacesShip(
      playerTiles,
      shipLengths[0],
      direction,
      shipLengths,
      playerShips
    );
    playerTiles.forEach((tile) => {
      tile.addEventListener("click", () => DOM.toggleFakeModal());
    });
    DOM.addInteractiveBoard(fakePlayerTiles, shipLengths[0], direction);
    if (shipLengths.length < 1) {
      DOM.toggleFakeModal();
      const start = document.getElementById("start-game");
      start.addEventListener("click", () => {
        playGame();
        DOM.updateBoard();
        DOM.toggleModal();
      });
    }
  });
}

function getAttack(player) {
  const x = Number(player.board.mostRecentHit()[1]);
  const y = Number(player.board.mostRecentHit()[3]);
  return [x, y];
}

function addPlayerShips(player) {
  playerShips.forEach((ship) => {
    player.board.placeShip(new Ship(ship[0]), ship[1], ship[2]);
  });
}
