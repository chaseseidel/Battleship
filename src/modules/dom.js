export default class DOM {
  static loadPage() {
    DOM.createTitle();
    DOM.createGameContainer();
    DOM.createGameBoards();
    DOM.createFooter();
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
}
