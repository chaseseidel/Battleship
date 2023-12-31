export default class DOM {
  static loadPage() {
    DOM.createTitle();
    DOM.createGameContainer();
    DOM.createGameBoards();
    DOM.createFooter();
    DOM.createModal();
    DOM.createFakeModal();
    DOM.createGameOverModal();
  }

  static createTitle() {
    const container = document.getElementById("container");

    const title = document.createElement("div");
    title.setAttribute("id", "title");
    title.textContent = "Battleship";

    container.appendChild(title);
  }

  static createFooter() {
    const container = document.getElementById("container");

    const footer = document.createElement("footer");
    footer.textContent = "Copyright © 2023 chaseseidel";

    container.appendChild(footer);
  }

  static createGameContainer() {
    const container = document.getElementById("container");

    const gameContainer = document.createElement("div");
    gameContainer.setAttribute("id", "game-container");

    container.appendChild(gameContainer);
  }

  static createGameBoards() {
    const gameContainer = document.getElementById("game-container");

    for (let i = 0; i < 2; i++) {
      const board = document.createElement("div");
      board.classList.add("board");

      for (let i = 0; i < 100; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        board.appendChild(tile);
      }

      gameContainer.appendChild(board);
    }
  }

  static createModal() {
    const container = document.getElementById("container");

    const modal = document.createElement("div");
    modal.className = "place-ships-modal active";

    const overlay = document.createElement("div");
    const content = document.createElement("div");
    const text = document.createElement("div");
    const board = document.createElement("div");
    const rotate = document.createElement("button");

    overlay.classList.add("overlay");
    content.classList.add("place-ships-board");

    text.setAttribute("id", "modal-text");
    text.textContent = "Place your ships";

    board.classList.add("board");

    for (let i = 0; i < 100; i++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      board.appendChild(tile);
    }

    rotate.classList.add("button");
    rotate.setAttribute("id", "rotate");
    rotate.textContent = "Rotate";

    content.appendChild(text);
    content.appendChild(board);
    content.appendChild(rotate);

    modal.appendChild(overlay);
    modal.appendChild(content);

    container.appendChild(modal);
  }

  static createFakeModal() {
    const container = document.getElementById("container");

    const modal = document.createElement("div");
    modal.className = "place-ships-modal-fake active";

    const content = document.createElement("div");
    const text = document.createElement("div");
    const board = document.createElement("div");
    const rotate = document.createElement("button");

    content.classList.add("place-ships-board");

    text.setAttribute("id", "modal-text");
    text.textContent = "Place your ships";

    board.classList.add("board");

    for (let i = 0; i < 100; i++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      board.appendChild(tile);
    }

    rotate.classList.add("button");
    rotate.setAttribute("id", "fake-rotate");
    rotate.textContent = "Rotate";

    content.appendChild(text);
    content.appendChild(board);
    content.appendChild(rotate);

    modal.appendChild(content);

    container.appendChild(modal);
  }

  static createGameOverModal() {
    const container = document.getElementById("container");

    const modal = document.createElement("div");
    modal.className = "game-over-modal";

    const overlay = document.createElement("div");
    const content = document.createElement("div");
    const text = document.createElement("div");
    const winnerText = document.createElement("div");
    const resetButton = document.createElement("button");

    overlay.classList.add("overlay");
    content.classList.add("game-over-content");

    text.setAttribute("id", "game-over-modal-text");
    text.textContent = "Game Over";

    winnerText.setAttribute("id", "winner-text");
    winnerText.textContent = "You won the game!";

    resetButton.classList.add("button");
    resetButton.setAttribute("id", "reset");
    resetButton.textContent = "Reset Game";

    content.appendChild(text);
    content.appendChild(winnerText);
    content.appendChild(resetButton);

    modal.appendChild(overlay);
    modal.appendChild(content);

    container.appendChild(modal);
  }

  static placeShip(tiles, length, position, direction) {
    position = position[1] * 10 + position[0];
    if (direction === "x") {
      for (let i = 0; i < length; i++) {
        tiles[position + i].classList.add("ship");
      }
    } else {
      for (let i = 0; i < length; i++) {
        tiles[position + 10 * i].classList.add("ship");
      }
    }
  }

  static markAttack(tiles, position) {
    position = position[1] * 10 + position[0];

    if (tiles[position].classList.contains("ship")) {
      tiles[position].className = "tile hit";
    } else {
      tiles[position].classList.add("miss");
    }
  }

  static markPlayerAttack(tiles, position, opponent) {
    const tilePosition = position[1] * 10 + position[0];

    if (typeof opponent.board.board[position[0]][position[1]] === "object") {
      tiles[tilePosition].className = "tile hit";
    } else {
      if (!tiles[tilePosition].classList.contains("miss")) {
        tiles[tilePosition].classList.add("miss");
      }
    }
  }

  static playerPlacesShip(tiles, length, direction, shipLengths, ships) {
    tiles.forEach((tile, index) => {
      tile.addEventListener("click", () => {
        let interfere = false;
        if (direction === "x") {
          for (let i = 0; i < length; i++) {
            if ((index % 10) + length > 10) {
              interfere = true;
              break;
            }
            if (tiles[index + i].classList.contains("ship")) {
              interfere = true;
              break;
            }
          }
          if (!interfere) {
            DOM.placeShip(
              tiles,
              length,
              [index % 10, Math.floor(index / 10)],
              direction
            );
            shipLengths.shift();
            ships.push([
              length,
              [index % 10, Math.floor(index / 10)],
              direction,
            ]);
          }
        } else {
          for (let i = 0; i < length; i++) {
            if (Math.floor(index / 10) + length > 10) {
              interfere = true;
              break;
            }
            if (tiles[index + 10 * i].classList.contains("ship")) {
              interfere = true;
              break;
            }
          }
          if (!interfere) {
            DOM.placeShip(
              tiles,
              length,
              [index % 10, Math.floor(index / 10)],
              direction
            );
            shipLengths.shift();
            ships.push([
              length,
              [index % 10, Math.floor(index / 10)],
              direction,
            ]);
          }
        }
      });
    });
  }

  static addInteractiveBoard(tiles, length, direction) {
    tiles.forEach((tile, index) => {
      tile.addEventListener("mouseenter", () => {
        let interfere = false;
        if (direction === "x") {
          for (let i = 0; i < length; i++) {
            if ((index % 10) + length > 10) {
              interfere = true;
              break;
            }
            if (
              tiles[index + i].classList.contains("ship") ||
              tiles[index + i].classList.contains("fake-ship")
            ) {
              interfere = true;
              break;
            }
          }
          if (!interfere) {
            for (let i = 0; i < length; i++) {
              tiles[index + i].classList.toggle("ship");
            }
          } else {
            tile.classList.toggle("miss");
          }
        } else if (direction === "y") {
          for (let i = 0; i < length; i++) {
            if (Math.floor(index / 10) + length > 10) {
              interfere = true;
              break;
            }
            if (
              tiles[index + 10 * i].classList.contains("ship") ||
              tiles[index + 10 * i].classList.contains("fake-ship")
            ) {
              interfere = true;
              break;
            }
          }
          if (!interfere) {
            for (let i = 0; i < length; i++) {
              tiles[index + 10 * i].classList.toggle("ship");
            }
          } else {
            tile.classList.toggle("miss");
          }
        }
      });

      tile.addEventListener("mouseleave", () => {
        if (direction === "x") {
          if (tile.classList.contains("ship")) {
            for (let i = 0; i < length; i++) {
              tiles[index + i].classList.toggle("ship");
            }
          }
          if (tile.classList.contains("miss")) {
            tile.classList.toggle("miss");
          }
        } else if (direction === "y") {
          if (tile.classList.contains("ship")) {
            for (let i = 0; i < length; i++) {
              tiles[index + 10 * i].classList.toggle("ship");
            }
          }
          if (tile.classList.contains("miss")) {
            tile.classList.toggle("miss");
          }
        }
      });
    });
  }

  static updateBoard() {
    const boards = document.querySelectorAll(".board");
    const playerBoard = boards[0];
    const boardToCopy = boards[2];

    const playerTiles = playerBoard.querySelectorAll(".tile");
    const tilesToCopy = boardToCopy.querySelectorAll(".tile");

    playerTiles.forEach((tile, index) => {
      tile.className = tilesToCopy[index].className;
    });
  }

  static removeEventListeners(tiles) {
    tiles.forEach((tile) => {
      tile.parentNode.replaceChild(tile.cloneNode(true), tile);
    });
  }

  static toggleModal() {
    const modal = document.querySelector(".place-ships-modal");

    modal.classList.toggle("active");
  }

  static toggleFakeModal() {
    const modal = document.querySelector(".place-ships-modal-fake");

    modal.classList.toggle("active");
  }

  static toggleGameOverModal() {
    const modal = document.querySelector(".game-over-modal");

    modal.classList.toggle("active");
  }

  static resetPage() {
    const container = document.getElementById("container");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
}
