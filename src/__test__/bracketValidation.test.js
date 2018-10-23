'use strict';

const isItAChild = require('../isItAChild');
const Node = require('../lib/Node');
const Tree = require('../lib/Tree');

const testTree = new Tree(10);
testTree.root.left = new Node(1);
testTree.root.left.left = new Node(9);
testTree.root.left.right = new Node(3);
testTree.root.right = new Node(5);
testTree.root.right.right = new Node(7);
testTree.root.right.left = new Node(4);
testTree.root.right.left.left = new Node(100);
testTree.root.right.left.right = new Node(11);

describe('repeatedWord.js', () => {
  test('Successfully returned false when checking if 100 is a child of 9', () => {
    const result = isItAChild(testTree.root, 9, 100);
    expect(result).toEqual(false);
  });
  test('Successfully returned false when checking if 4 is a child of 1', () => {
    const result = isItAChild(testTree.root, 1, 4);
    expect(result).toEqual(false);
  });
  test('Successfully returned false when checking if 11 is a child of 10', () => {
    const result = isItAChild(testTree.root, 10, 11);
    expect(result).toEqual(true);
  });
  test('Successfully returned false when checking if 7 is a child of 5', () => {
    const result = isItAChild(testTree.root, 5, 7);
    expect(result).toEqual(true);
  });
});
