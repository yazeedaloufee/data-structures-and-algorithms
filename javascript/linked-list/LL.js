"use strict";
const Node = require("./node.js");
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let lastNode = this.head;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = node;
    }
  }
  addNewHead(value) {
    if (!this.head) {
      this.add(value);
    } else {
      let node = new Node(value);
      node.next = this.head;
      this.head = node;
    }
  }
  include(value){
    let searchNode = this.head;
    while(searchNode.next){
      if(value === searchNode.value){
        return true;
      }
      searchNode = searchNode.next;
    }
    return false;
  }
  toString(){
    let string = '';
    let searchNode = this.head;
    while(searchNode){
      string = string + `{${searchNode.value}} -> `
      searchNode = searchNode.next;
    }
    string = string +'NUll'
    return string;
  }
}
let ll = new LinkedList();
ll.add(5)
ll.add(6)
ll.addNewHead(10);
console.log(ll.include(5));
console.log(ll.toString())

module.exports = LinkedList;
