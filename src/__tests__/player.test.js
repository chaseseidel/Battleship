import Player from "../modules/player";
import Gameboard from "../modules/gameboard";
import Ship from "../modules/ship";

let player;
let computer;

beforeEach(() => {
  player = new Player("Bob");
});

describe("Player creation", () => {
  test("Create player with a name", () => {
    expect(player.name).toBe("Bob");
  });
});

describe("Player turn changing", () => {
  test("Check if it's player's turn", () => {
    expect(player.isTurn()).toBeFalsy();
  });

  test("Change player's turn", () => {
    player.changeTurn();
    expect(player.isTurn()).toBeTruthy();
  });
});

describe("Player has random ships", () => {
  beforeEach(() => {
    player.board.createBoard();
  });

  test("Player with one random ship", () => {
    player.randomShip(3);
    expect(player.board.ships.length).toBe(1);
  });

  test("Player with random fleet", () => {
    player.randomFleet();

    expect(player.board.ships.length).toBe(5);
  });
});

describe("Player attacking", () => {
  beforeEach(() => {
    computer = new Player("AI");
    computer.board.createBoard();
    computer.board.placeShip(new Ship(3), [2, 1], "x");
    player.board.createBoard();
    player.board.placeShip(new Ship(4), [4, 2], "y");
  });

  test("Player gets attacked", () => {
    player.incomingAttack([4, 3]);
    expect(player.board.ships[0].hits.length).toBe(1);
  });

  test("Player gets attacked illegally", () => {
    expect(() => player.incomingAttack([10, 3])).toThrow();
  });

  test("Player attacks other player", () => {
    player.attackPlayer(computer, [2, 1]);
    expect(computer.board.ships[0].hits.length).toBe(1);
  });

  test("Player attacks and misses other player", () => {
    player.attackPlayer(computer, [9, 9]);
    expect(computer.board.ships[0].hits.length).toBe(0);
    expect(computer.board.board[9][9]).toBe(1);
  });

  test("Player attacks marked target", () => {
    player.attackPlayer(computer, [9, 9]);
    expect(() => player.attackPlayer(computer, [9, 9])).toThrow();
  });
});
