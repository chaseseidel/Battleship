export default class DOM {
  static loadPage() {
    DOM.createTitle();
    DOM.createGameContainer();
    DOM.createGameBoards();
    DOM.createFooter();
    DOM.createModal();
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
    footer.textContent = "Copyright Chase";

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
    const start = document.createElement("button");

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

    start.classList.add("button");
    start.setAttribute("id", "start-game");
    start.textContent = "Start Game";

    content.appendChild(text);
    content.appendChild(board);
    content.appendChild(rotate);
    content.appendChild(start);

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

  static removeEventListeners(tiles) {
    tiles.forEach((tile) => {
      tile.parentNode.replaceChild(tile.cloneNode(true), tile);
    });
  }
}
