//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, obj, arg2) {
  return fn.call(obj, arg2)
}

function setThisWithApply(fn, obj, arr) {
  return fn.apply(obj, arr);
}

function returnNewFunctionOf(fn, obj) {
  return fn.bind(obj)
}
