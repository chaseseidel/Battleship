import Player from "../modules/player";
import Gameboard from "../modules/gameboard";

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
