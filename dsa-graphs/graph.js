class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    if (this.nodes.has(v1) && this.nodes.has(v2)) {
      v1.adjacent.add(v2);
      v2.adjacent.add(v1);
    } else {
      throw new Error("One or both vertices are not in the graph");
    }
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    if (this.nodes.has(v1) && this.nodes.has(v2)) {
      v1.adjacent.delete(v2);
      v2.adjacent.delete(v1);
    } else {
      throw new Error("One or both vertices are not in the graph");
    }
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const result = [];
    const visited = new Set();
    const stack = [start];

    while (stack.length > 0) {
      let v = stack.pop();
      if (visited.has(v)) {
        continue;
      }
      result.push(v.value);
      visited.add(v);
      // To ensure consistency in the order of traversal, sort the adjacent nodes
      for (let adj of Array.from(v.adjacent).sort((a, b) =>
        a.value.localeCompare(b.value)
      )) {
        if (!visited.has(adj)) {
          stack.push(adj);
        }
      }
    }
    console.log(result);
    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const result = [];
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
      let v = queue.shift();
      if (visited.has(v)) {
        continue;
      }
      result.push(v.value);
      visited.add(v);
      for (let adj of v.adjacent) {
        if (!visited.has(adj)) {
          queue.push(adj);
        }
      }
    }
    return result;
  }
}

module.exports = { Graph, Node };
