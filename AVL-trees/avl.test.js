const AVLTree = require("./AVL");

describe("AVLTree", () => {
  let avl;

  beforeEach(() => {
    avl = new AVLTree();
  });

  test("should create an empty AVL tree", () => {
    expect(avl.root).toBeNull();
  });

  test("should insert values into the AVL tree", () => {
    const keys = [50, 25, 75, 15, 35, 60, 120, 10, 68, 90, 125, 83, 100];
    keys.forEach((key) => avl.insert(key));

    const inorderKeys = [];
    avl.inorderTraversal((key) => inorderKeys.push(key));
    expect(inorderKeys).toEqual([
      10, 15, 25, 35, 50, 60, 68, 75, 83, 90, 100, 120, 125,
    ]);
  });

  test("should search for values in the AVL tree", () => {
    const keys = [50, 25, 75, 15, 35, 60, 120, 10, 68, 90, 125, 83, 100];
    keys.forEach((key) => avl.insert(key));

    expect(avl.search(125)).toBeDefined();
    expect(avl.search(125).key).toBe(125);
    expect(avl.search(1)).toBeNull();
  });

  test("should delete values from the AVL tree", () => {
    const keys = [50, 25, 75, 15, 35, 60, 120, 10, 68, 90, 125, 83, 100];
    keys.forEach((key) => avl.insert(key));

    avl.delete(120);
    expect(avl.search(120)).toBeNull();

    const inorderKeys = [];
    avl.inorderTraversal((key) => inorderKeys.push(key));
    expect(inorderKeys).toEqual([
      10, 15, 25, 35, 50, 60, 68, 75, 83, 90, 100, 125,
    ]);

    avl.delete(10);
    expect(avl.search(10)).toBeNull();

    inorderKeys.length = 0;
    avl.inorderTraversal((key) => inorderKeys.push(key));
    expect(inorderKeys).toEqual([15, 25, 35, 50, 60, 68, 75, 83, 90, 100, 125]);
  });

  test("should perform left and right rotations", () => {
    avl.insert(50);
    avl.insert(25);
    avl.insert(75);
    avl.insert(10);
    avl.insert(30);
    avl.insert(60);
    avl.insert(80);
    avl.insert(5);
    avl.insert(15);
    avl.insert(27);
    avl.insert(55);
    avl.insert(70);
    avl.insert(90);

    const inorderKeys = [];
    avl.inorderTraversal((key) => inorderKeys.push(key));
    expect(inorderKeys).toEqual([
      5, 10, 15, 25, 27, 30, 50, 55, 60, 70, 75, 80, 90,
    ]);
  });
  //should not handle dupes lol
  // test("should handle duplicate values", () => {
  //   avl.insert(50);
  //   avl.insert(25);
  //   avl.insert(75);
  //   avl.insert(25);
  //   avl.insert(75);

  //   const inorderKeys = [];
  //   avl.inorderTraversal((key) => inorderKeys.push(key));
  //   expect(inorderKeys).toEqual([25, 50, 75]);
  // });
});
