import Ship from "../modules/ship";

let battleship;
let submarine;

beforeEach(() => {
  battleship = new Ship(4);
  submarine = new Ship(3);
});

test("Ships taking multiple hits", () => {
  battleship.hit([1, 3]);
  battleship.hit([1, 4]);
  submarine.hit([4, 7]);
  submarine.hit([4, 8]);

  expect(battleship.hits.length).toBe(2);
  expect(submarine.hits.length).toBe(2);
});

test("Ships not being sunk", () => {
  battleship.hit([1, 3]);
  battleship.hit([1, 4]);
  submarine.hit([4, 7]);
  submarine.hit([4, 8]);
  expect(battleship.isSunk()).toBeFalsy();
  expect(submarine.isSunk()).toBeFalsy();
});

test("Ships being sunk", () => {
  battleship.hit([1, 3]);
  battleship.hit([1, 4]);
  battleship.hit([1, 5]);
  battleship.hit([1, 6]);
  submarine.hit([3, 5]);
  submarine.hit([4, 5]);
  submarine.hit([5, 5]);
  submarine.hit([6, 5]);
  expect(battleship.isSunk()).toBeTruthy();
  expect(submarine.isSunk()).toBeTruthy();
});

test("Ships being hit in the same spot", () => {
  battleship.hit([0, 0]);
  battleship.hit([0, 0]);
  submarine.hit([1, 1]);
  submarine.hit([1, 1]);
  expect(battleship.hits.length).toBe(1);
  expect(submarine.hits.length).toBe(1);
});
