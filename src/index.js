export default (el) => {
  if (typeof el == 'undefined' || el === null) return false;
  else if (typeof HTMLElement == 'function' || typeof HTMLElement == 'function') {
    return el instanceof HTMLElement;
  } else {
    return el && typeof el == 'object' && el.nodeType === 1 && typeof el.nodeName == 'string';
  }
};
