'use strict';

// Require our linked list implementation
const Node = require('../node')
const LinkedLilst = require('../LL');

describe('Linked List', () => {
  it('should add new items to empty linked list', () => {
    let ll = new LinkedLilst;
    let value = 6;
    ll.add(value);

    expect(ll.head.value).toEqual(6);
    expect(ll.head.next).toBeNull();

  });

  it('should add new items no not empy linked list',()=>{
    let ll = new LinkedLilst();
    let value1= 5;
    let value2 = 10;
    ll.add(value1)

    ll.add(value2);
    expect(ll.head.next.value).toEqual(10);
    expect(ll.head.next.next).toBeNull();
  })

  it('should add a new head to the linked list',()=>{
    let ll = new LinkedLilst();
    let value = 5;
    let newHead = 10;

    ll.add(value);
    ll.addNewHead(newHead)
    expect(ll.head.value).toEqual(10);
    expect(ll.head.next.value).toEqual(5);

  })

  it('return true if it include the value',()=>{
    let ll = new LinkedLilst();
    let value = 5;
    let value2 = 6;
    let newHead = 10;
    ll.add(value);
    ll.add(value2);
    ll.addNewHead(newHead)
    expect(ll.head.value).toEqual(10);
    expect(ll.head.next.value).toEqual(5);
    expect(ll.head.next.next.value).toEqual(6);
    expect(ll.include(5)).toEqual(true);
  })

  it('return a string of the whole list',()=>{
    let ll = new LinkedLilst();
    let value = 5;
    let value2 = 6;
    let newHead = 10;
    ll.add(value);
    ll.add(value2);
    ll.addNewHead(newHead)
    expect(ll.head.value).toEqual(10);
    expect(ll.head.next.value).toEqual(5);
    expect(ll.head.next.next.value).toEqual(6);
    expect(ll.toString()).toEqual('{10} -> {5} -> {6} -> NUll');
  })

});
