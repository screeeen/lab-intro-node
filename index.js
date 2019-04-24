class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    return this.items.sort(function(a,b){return a-b});
  }

  get(pos) {
    return this.items[pos];
  }

  max() {
    if (this.length < 1) throw new Error("EmptySortedList");
    return this.items[this.length-1];

  }
  min() {
    if (this.length < 1) throw new Error("EmptySortedList");
    return this.items[0];
  }

  sum() {
    let arrSum = 0;
    for (let i = 0; i < this.length; i++) {
      arrSum += this.items[i];
    }
    return arrSum;

  }

  average() {
    if (this.length < 1) throw new Error("EmptySortedList");
    return this.sum()/this.length;
  }
};

module.exports = SortedList;

