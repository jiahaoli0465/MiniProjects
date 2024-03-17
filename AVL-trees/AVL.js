class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    return node ? node.height : 0;
  }

  getBalanceFactor(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  getMinNode(node) {
    return node && node.left ? this.getMinNode(node.left) : node;
  }

  search(key) {
    let x = this.root;
    while (x && key !== x.key) {
      if (key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    return x;
  }

  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(root, key) {
    if (!root) {
      return new Node(key);
    } else if (key < root.key) {
      root.left = this.insertNode(root.left, key);
    } else {
      root.right = this.insertNode(root.right, key);
    }

    root.height =
      1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

    const balanceFactor = this.getBalanceFactor(root);

    if (balanceFactor > 1 && key < root.left.key) {
      return this.rightRotate(root);
    }

    if (balanceFactor < -1 && key > root.right.key) {
      return this.leftRotate(root);
    }

    if (balanceFactor > 1 && key > root.left.key) {
      root.left = this.leftRotate(root.left);
      return this.rightRotate(root);
    }

    if (balanceFactor < -1 && key < root.right.key) {
      root.right = this.rightRotate(root.right);
      return this.leftRotate(root);
    }

    return root;
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(root, key) {
    if (!root) {
      return root;
    } else if (key < root.key) {
      root.left = this.deleteNode(root.left, key);
    } else if (key > root.key) {
      root.right = this.deleteNode(root.right, key);
    } else {
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      const minNode = this.getMinNode(root.right);
      root.key = minNode.key;
      root.right = this.deleteNode(root.right, minNode.key);
    }

    root.height =
      1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

    const balanceFactor = this.getBalanceFactor(root);

    if (balanceFactor > 1 && this.getBalanceFactor(root.left) >= 0) {
      return this.rightRotate(root);
    }

    if (balanceFactor < -1 && this.getBalanceFactor(root.right) <= 0) {
      return this.leftRotate(root);
    }

    if (balanceFactor > 1 && this.getBalanceFactor(root.left) < 0) {
      root.left = this.leftRotate(root.left);
      return this.rightRotate(root);
    }

    if (balanceFactor < -1 && this.getBalanceFactor(root.right) > 0) {
      root.right = this.rightRotate(root.right);
      return this.leftRotate(root);
    }

    return root;
  }

  leftRotate(node) {
    const rightChild = node.right;
    const rightLeftChild = rightChild.left;

    rightChild.left = node;
    node.right = rightLeftChild;

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    rightChild.height =
      1 +
      Math.max(
        this.getHeight(rightChild.left),
        this.getHeight(rightChild.right)
      );

    return rightChild;
  }

  rightRotate(node) {
    const leftChild = node.left;
    const leftRightChild = leftChild.right;

    leftChild.right = node;
    node.left = leftRightChild;

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    leftChild.height =
      1 +
      Math.max(this.getHeight(leftChild.left), this.getHeight(leftChild.right));

    return leftChild;
  }

  inorderTraversal(callback) {
    this.inorderTraversalNode(this.root, callback);
  }

  inorderTraversalNode(node, callback) {
    if (node) {
      this.inorderTraversalNode(node.left, callback);
      callback(node.key);
      this.inorderTraversalNode(node.right, callback);
    }
  }
}

module.exports = AVLTree;
