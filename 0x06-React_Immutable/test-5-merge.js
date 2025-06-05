import { concatElements, mergeElements } from './5-merge.js';

console.log(concatElements([1, 2], [3, 4])); // List [1, 2, 3, 4]
console.log(mergeElements({ a: 1, b: 2 }, { b: 100, c: 3 })); // List [1, 100, 3]
