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

  expect(gameboard.board[0][0]).toBe(0);
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
    });
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

  test("Keep track of ships", () => {
    gameboard.placeShip(battleship, [1, 5], "x");
    gameboard.placeShip(battleship, [5, 3], "y");

    expect(gameboard.ships.length).toBe(2);
  });
});

describe("Attacking ships", () => {
  beforeEach(() => {
    gameboard.createBoard();
    battleship = new Ship(4);
    submarine = new Ship(3);
    gameboard.placeShip(battleship, [1, 3], "x");
    gameboard.placeShip(submarine, [5, 1], "y");
  });

  test("Ship being attacked", () => {
    gameboard.receiveAttack([2, 3]);

    expect(battleship.hits.length).toBe(1);
  });

  test("Ship being shot illegaly", () => {
    expect(() => gameboard.receiveAttack([10, 3])).toThrow();
  });

  test("Ship being attacked multiple times", () => {
    gameboard.receiveAttack([3, 3]);

    expect(() => gameboard.receiveAttack([3, 3])).toThrow();
    expect(battleship.hits.length).toBe(1);
  });

  test("Ship being sunk", () => {
    gameboard.receiveAttack([1, 3]);
    gameboard.receiveAttack([2, 3]);
    gameboard.receiveAttack([3, 3]);
    gameboard.receiveAttack([4, 3]);

    expect(battleship.isSunk()).toBeTruthy();
  });

  test("Missed shot", () => {
    gameboard.receiveAttack([9, 8]);

    expect(gameboard.board[9][8]).toBe(1);
  });

  test("Attacked already hit zone", () => {
    gameboard.receiveAttack([9, 8]);

    expect(() => gameboard.receiveAttack([9, 8])).toThrow();
  });

  test("Most Recent Attack", () => {
    gameboard.receiveAttack([9, 8]);

    expect(gameboard.mostRecentHit()).toBe("[9,8]");
  });

  test("All ships sunk", () => {
    for (let i = 0; i < battleship.length; i++) {
      gameboard.receiveAttack([1 + i, 3]);
    }

    for (let i = 0; i < submarine.length; i++) {
      gameboard.receiveAttack([5, 1 + i]);
    }

    expect(gameboard.allShipsSunk()).toBeTruthy();
  });

  test("All ships not sunk", () => {
    gameboard.receiveAttack([1, 3]);
    gameboard.receiveAttack([5, 1]);

    expect(gameboard.allShipsSunk()).toBeFalsy();
  });
});
