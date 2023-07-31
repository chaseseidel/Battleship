import Gameboard from "../modules/gameboard";
import Ship from "../modules/ship";

let gameboard;
let battleship;
let submarine;

beforeEach(() => {
  gameboard = new Gameboard();
});

test("Create board", () => {
  gameboard.createBoard();

  expect(gameboard.board[0][0]).toEqual(0);
});

describe("Ship placement", () => {
  beforeEach(() => {
    gameboard.createBoard();
    battleship = new Ship(4);
    submarine = new Ship(3);
  });

  test("Place ship properly horizontally", () => {
    gameboard.placeShip(battleship, [1, 3], "x");

    expect(gameboard.board[1][3]).toEqual({
      length: 4,
      hits: [],
      sunk: false,
    });
    expect(gameboard.board[4][3]).toEqual({
        length: 4,
        hits: [],
        sunk: false,
      });;
  });

  test("Place ship at invalid horizontal position", () => {
    expect(() => gameboard.placeShip(battleship, [7, 9], "x")).toThrow();
  });

  test("Place ship properly vertically", () => {
    gameboard.placeShip(battleship, [4, 2], "y");

    expect(gameboard.board[4][2]).toEqual({
        length: 4,
        hits: [],
        sunk: false,
      });
    expect(gameboard.board[4][5]).toEqual({
        length: 4,
        hits: [],
        sunk: false,
      });
  });

  test("Place ship at invalid vertical position", () => {
    expect(() => gameboard.placeShip(battleship, [3, 6], "y")).toThrow();
  });

  test("Place ship on top of another ship", () => {
    gameboard.placeShip(battleship, [1, 5], "x");

    expect(() => gameboard.placeShip(submarine, [3, 3], "y")).toThrow();
  });
});
