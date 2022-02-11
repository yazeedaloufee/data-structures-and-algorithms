'use strict'
const Node = require('../node.js')



describe('creating a new node',()=>{
  it('should create a new node',()=>{
    const value = 6;
    const node = new Node(value);
    expect(node.value).toEqual(6);
    expect(node.next).toEqual(null);
  })
})