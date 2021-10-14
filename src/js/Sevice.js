export default function canIterate(method, obj) {
  try {
    return method in Object.getPrototypeOf(obj);
  } catch (error) {
    return false;
  }
}
