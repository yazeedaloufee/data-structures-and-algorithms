"use strict";
const Dnode = require("./doublyNode");

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}
DoublyLinkedList.prototype.add = function (value) {
  let node = new Dnode(value);
  if (!this.head) {
    this.head = node;
    this.length = this.length + 1;
    return;
  }
  let lastNode = this.head;
  while (lastNode.next) {
    lastNode = lastNode.next;
  }
  if (lastNode) {
    node.pre = lastNode;
    this.tail = node;
    lastNode.next = node;
  }
  this.length = this.length + 1;
};

DoublyLinkedList.prototype.include = function (value) {
  let searchNode = this.head;
  while (searchNode) {
    if (searchNode.value === value) {
      return true;
    }
    searchNode = searchNode.next;
  }
  return false;
};
DoublyLinkedList.prototype.toString = function () {
  let string = "";
  let searchNode = this.head;
  while (searchNode) {
    string+=`{${searchNode.value}} <-> `
    searchNode = searchNode.next;
  }
  string+='NULL'
  return string;
};

module.exports = DoublyLinkedList;
