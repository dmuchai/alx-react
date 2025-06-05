import { getListObject, addElementToList } from './3-list.js';

const array = ['a', 'b'];
const list = getListObject(array);
console.log(list.toString()); // List [ "a", "b" ]

const newList = addElementToList(list, 'c');
console.log(newList.toString()); // List [ "a", "b", "c" ]
console.log(list.toString()); // List [ "a", "b" ] (original list remains unchanged)
