export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = new Set();
    this.sunk = false;
  }

  hit(position) {
    if (!this.hits.has(position)) {
      this.hits.add(position);
    }

    if (this.hits.size >= this.length) {
      this.sunk = true;
    }
  }

  isSunk() {
    return this.sunk;
  }
}
