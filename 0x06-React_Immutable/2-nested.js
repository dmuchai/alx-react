export default function accessImmutableObject(object, array) {
  return object.getIn(array);
}
