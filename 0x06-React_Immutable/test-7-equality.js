import { Map } from 'immutable';
import areMapsEqual from './7-equality.js';

const map1 = Map({ firstName: 'Guillaume', lastName: 'Salva' });
const map2 = Map({ firstName: 'Guillaume', lastName: 'Salva' });
const map3 = Map({ firstName: 'John', lastName: 'Doe' });

console.log(areMapsEqual(map1, map2)); // true
console.log(areMapsEqual(map1, map3)); // false
