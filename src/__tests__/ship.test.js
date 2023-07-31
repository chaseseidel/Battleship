import Ship from "../modules/ship";

let battleship;
let submarine;

beforeEach(() => {
  battleship = new Ship(4);
  submarine = new Ship(3);
});

test("Ships taking multiple hits", () => {
  battleship.hit(1);
  battleship.hit(2);
  submarine.hit(1);
  submarine.hit(2);

  expect(battleship.hits.length).toBe(2);
  expect(submarine.hits.length).toBe(2);
});

test("Ships not being sunk", () => {
    battleship.hit(1);
    battleship.hit(2);
    submarine.hit(1);
    submarine.hit(2);
    expect(battleship.isSunk()).toBeFalsy();
    expect(submarine.isSunk()).toBeFalsy();
});

test("Ships being sunk", () => {
    battleship.hit(1);
    battleship.hit(2);
    battleship.hit(3);
    battleship.hit(4);
    submarine.hit(1);
    submarine.hit(2);
    submarine.hit(3);
    expect(battleship.isSunk()).toBeTruthy();
    expect(submarine.isSunk()).toBeTruthy();
});

test("Ships being hit in the same spot", () => {
    battleship.hit(1);
    battleship.hit(1);
    battleship.hit(1);
    battleship.hit(1);
    submarine.hit(1);
    submarine.hit(1);
    submarine.hit(1);
    expect(battleship.hits.length).toBe(1);
    expect(submarine.hits.length).toBe(1);
});