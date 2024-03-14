class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    let current = this.root;

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    while (current) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      } else {
        // this tree dont do duplicates
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    this.root = this.insertNodeRecursively(this.root, val);
    return this;
  }

  insertNodeRecursively(node, val) {
    if (node === null) {
      return new Node(val);
    }

    if (val < node.val) {
      node.left = this.insertNodeRecursively(node.left, val);
    } else if (val > node.val) {
      node.right = this.insertNodeRecursively(node.right, val);
    }

    return node;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) {
        return current;
      }
      current = current.val < val ? current.right : current.left;
    }
    return undefined;
  }
  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    return this.findRecursivelyHelper(this.root, val);
  }

  findRecursivelyHelper(current, val) {
    if (current === null) {
      return undefined;
    }
    if (current.val === val) {
      return current;
    }
    return current.val < val
      ? this.findRecursivelyHelper(current.right, val)
      : this.findRecursivelyHelper(current.left, val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */
  dfsPreOrder() {
    let arr = [];
    this.dfsPreOrderHelper(this.root, arr);
    return arr;
  }

  dfsPreOrderHelper(node, arr) {
    if (node === null) {
      return;
    }
    arr.push(node.val);
    this.dfsPreOrderHelper(node.left, arr);
    this.dfsPreOrderHelper(node.right, arr);
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = [];
    this.dfsInOrderHelper(this.root, arr);
    return arr;
  }

  dfsInOrderHelper(node, arr) {
    if (node === null) {
      return;
    }
    this.dfsInOrderHelper(node.left, arr);
    arr.push(node.val);

    this.dfsInOrderHelper(node.right, arr);
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = [];
    this.dfsPostOrderHelper(this.root, arr);
    return arr;
  }
  dfsPostOrderHelper(node, arr) {
    if (node === null) {
      return;
    }
    this.dfsPostOrderHelper(node.left, arr);
    this.dfsPostOrderHelper(node.right, arr);
    arr.push(node.val);
  }
  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */
  bfs() {
    if (this.root === null) {
      return [];
    }

    const queue = [this.root];
    const result = [];

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return result;
  }
  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
