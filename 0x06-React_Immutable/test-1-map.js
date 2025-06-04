// test-1-map.js
import getImmutableObject from './1-map.js';

const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

const immutableMap = getImmutableObject(obj);
console.log(immutableMap);
console.log(immutableMap.get('thing'));         // should print: -914767132
console.log(immutableMap.toJS());               // should match original object
console.log(typeof immutableMap.toJS().thing);  // should be "number"
