import { fromJS } from 'immutable';

/**
 * Converts a plain JS object into an Immutable Map
 * @param {Object} object - The plain JavaScript object
 * @returns {Map} - Immutable Map created using fromJS
 */
export default function getImmutableObject(object) {
  return fromJS(object);
}
