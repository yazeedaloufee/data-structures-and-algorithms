'use strict'
const DoublyLinkedList = require('../DLL')
const Dnode = require('../doublyNode')

describe('create a doubly linked list',()=>{
  it('should create a DLL with head and tail and length',()=>{
    let dll = new DoublyLinkedList();

    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.length).toEqual(0);
  })

  it('should add a node to an empty list',()=>{
    let value = 5;
    let dll = new DoublyLinkedList();
    dll.add(value);
    expect(dll.head.value).toEqual(5);
    expect(dll.head.next).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.length).toEqual(1);
  })

  it('should add a node to a filled list',()=>{
    let value = 5;
    let value2= 6;
    let value3= 7;
    let dll = new DoublyLinkedList();
    dll.add(value);
    dll.add(value2);
    dll.add(value3);
    expect(dll.head.value).toEqual(5);
    expect(dll.head.next.value).toEqual(6);
    expect(dll.tail.value).toEqual(7);
    expect(dll.length).toEqual(3);
    expect(dll.tail.pre.value).toEqual(6);
  })

  it('should add a node to a filled list',()=>{
    let value = 5;
    let value2= 6;
    let value3= 7;
    let dll = new DoublyLinkedList();
    dll.add(value);
    dll.add(value2);
    dll.add(value3);
    expect(dll.include(6)).toBeTruthy();
    expect(dll.include(7)).toBeTruthy();
    expect(dll.include(5)).toBeTruthy();
  })

  it('should add a node to a filled list',()=>{
    let value = 5;
    let value2= 6;
    let value3= 7;
    let dll = new DoublyLinkedList();
    dll.add(value);
    dll.add(value2);
    dll.add(value3);
    expect(dll.toString()).toEqual('{5} <-> {6} <-> {7} <-> NULL')
  })

})