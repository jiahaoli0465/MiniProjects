class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  minDepth() {
    const minDepthHelper = (node) => {
      if (node === null) return 0;
      if (node.left === null && node.right === null) return 1;
      if (!node.left) return minDepthHelper(node.right) + 1;
      if (!node.right) return minDepthHelper(node.left) + 1;
      return Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1;
    };
    return minDepthHelper(this.root);
  }

  maxDepth() {
    const maxDepthHelper = (node) => {
      if (node === null) return 0;
      return 1 + Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right));
    };
    return maxDepthHelper(this.root);
  }

  maxSum() {
    let maxPathSum = Number.MIN_SAFE_INTEGER;
    if (this.root === null) return 0;

    const maxSumDFS = (node) => {
      if (node === null) return 0;
      let left = Math.max(0, maxSumDFS(node.left));
      let right = Math.max(0, maxSumDFS(node.right));
      maxPathSum = Math.max(maxPathSum, node.val + left + right);
      return node.val + Math.max(left, right);
    };

    maxSumDFS(this.root);
    return maxPathSum;
  }

  nextLarger(lowerBound) {
    let smallestAboveBound = null;

    const traverse = (node) => {
      if (node === null) return;
      if (node.val > lowerBound && (smallestAboveBound === null || node.val < smallestAboveBound)) {
        smallestAboveBound = node.val;
      }
      traverse(node.left);
      traverse(node.right);
    };

    traverse(this.root);
    return smallestAboveBound;
  }

  areCousins(node1, node2) {
    const findDepthAndParent = (node, target, depth = 0, parent = null) => {
      if (node === null) return null;
      if (node === target) return { depth, parent };

      let left = findDepthAndParent(node.left, target, depth + 1, node);
      let right = findDepthAndParent(node.right, target, depth + 1, node);

      return left || right;
    };

    let info1 = findDepthAndParent(this.root, node1);
    let info2 = findDepthAndParent(this.root, node2);

    return info1 && info2 && info1.depth === info2.depth && info1.parent !== info2.parent;
  }

  static serialize(tree) {
    const serializeHelper = (node) => {
      if (node === null) return 'null,';
      return `${node.val},${serializeHelper(node.left)}${serializeHelper(node.right)}`;
    };
    return serializeHelper(tree.root);
  }

  static deserialize(stringTree) {
    const list = stringTree.split(',');

    const deserializeHelper = (list) => {
      const val = list.shift();
      if (val === 'null') return null;
      const root = new BinaryTreeNode(parseInt(val, 10));
      root.left = deserializeHelper(list);
      root.right = deserializeHelper(list);
      return root;
    };

    return new BinaryTree(deserializeHelper(list));
  }

  lowestCommonAncestor(node1, node2) {
    const findLCA = (node, n1, n2) => {
      if (node === null) return null;
      if (node === n1 || node === n2) return node;

      let left = findLCA(node.left, n1, n2);
      let right = findLCA(node.right, n1, n2);

      if (left !== null && right !== null) return node;
      return left !== null ? left : right;
    };

    const lca = findLCA(this.root, node1, node2);
    return lca;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
