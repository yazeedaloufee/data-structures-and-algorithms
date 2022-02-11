'use strict'
const Dnode = require('../doublyNode');

describe('create doubly node',()=>{
  it('should create a new node',()=>{
    let value = 6;
    let node = new Dnode(value);
    expect(node.next).toBeNull();
    expect(node.pre).toBeNull();
    expect(node.value).toEqual(6);
    
  })
})
