// avlTree.test.js

const AVLTree = require("./AVL");

describe("AVLTree", () => {
  let avlTree;

  beforeEach(() => {
    avlTree = new AVLTree();
  });

  test("should create an empty AVL tree", () => {
    expect(avlTree.root).toBeNull();
  });

  test("should insert nodes and balance the tree", () => {
    avlTree.insert(5);
    avlTree.insert(3);
    avlTree.insert(7);
    avlTree.insert(1);

    expect(avlTree.root.value).toBe(5);
    expect(avlTree.root.left.value).toBe(3);
    expect(avlTree.root.right.value).toBe(7);
    expect(avlTree.root.left.left.value).toBe(1);
  });

  test("should perform left-left rotation", () => {
    avlTree.insert(3);
    avlTree.insert(2);
    avlTree.insert(1);

    expect(avlTree.root.value).toBe(2);
    expect(avlTree.root.left.value).toBe(1);
    expect(avlTree.root.right.value).toBe(3);
  });

  test("should perform right-right rotation", () => {
    avlTree.insert(3);
    avlTree.insert(4);
    avlTree.insert(5);

    expect(avlTree.root.value).toBe(4);
    expect(avlTree.root.left.value).toBe(3);
    expect(avlTree.root.right.value).toBe(5);
  });

  test("should perform left-right rotation", () => {
    avlTree.insert(5);
    avlTree.insert(1);
    avlTree.insert(3);

    expect(avlTree.root.value).toBe(3);
    expect(avlTree.root.left.value).toBe(1);
    expect(avlTree.root.right.value).toBe(5);
  });

  test("should perform right-left rotation", () => {
    avlTree.insert(3);
    avlTree.insert(5);
    avlTree.insert(4);

    expect(avlTree.root.value).toBe(4);
    expect(avlTree.root.left.value).toBe(3);
    expect(avlTree.root.right.value).toBe(5);
  });

  // Add more test cases for other AVL tree operations
  // ...
});
