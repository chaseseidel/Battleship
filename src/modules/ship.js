export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = [];
    this.sunk = false;
  }

  hit(position) {
    if (!this.hits.includes(`${position}`)) {
      this.hits.push(`${position}`);
    }

    if (this.hits.length >= this.length) {
      this.sunk = true;
    }
  }

  isSunk() {
    return this.sunk;
  }
}
