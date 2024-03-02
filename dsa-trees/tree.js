/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    if (!this.root) return sum;

    let toVisitQueue = [this.root];
    while (toVisitQueue.length) {
        let current = toVisitQueue.shift();
        sum += current.val;
        for (let child of current.children) toVisitQueue.push(child);
    }
    return sum;
}

  countEvens() {
      let count = 0;
      if (!this.root) return count;

      let toVisitQueue = [this.root];
      while (toVisitQueue.length) {
          let current = toVisitQueue.shift();
          count += current.val % 2 === 0 ? 1 : 0;
          for (let child of current.children) toVisitQueue.push(child);
      }
      return count;
  }

  numGreater(lowerBound) {
      let count = 0;
      if (!this.root) return count;

      let toVisitQueue = [this.root];
      while (toVisitQueue.length) {
          let current = toVisitQueue.shift();
          count += current.val > lowerBound ? 1 : 0;
          for (let child of current.children) toVisitQueue.push(child);
      }
      return count;
  }




}

module.exports = { Tree, TreeNode };
