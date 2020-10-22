/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */

/**
 * 首先 plain object是没有一个官方的定义的对象，一般俗称简单对象，
 * 在下面的这个函数中，参数obj只能是通过字面量（{}）,或者new Object()创建的对象
 * obj不能是通过Object.create()创建的对象，即使是Object.create(null)也不行,
 * 在代码中，为什么要通过循环判断呢，是因为
 * 1.解决cross-realm对象的问题
 * 2.可以拥有更高的性能
 */

export default function isPlainObject(obj) {
  // obj必须是一个非空的对象
  if (typeof obj !== 'object' || obj === null) return false

  let proto = obj
  //沿着原型链一直向上查找，直到proto的上一级（父亲）是null的时候停止，这个时候的proto是null的儿子
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  //将obj的上一级（父亲）与proto进行比较，相当于满足plainObject条件是 null => a object => plainObject
  return Object.getPrototypeOf(obj) === proto
}

/*
loadash中的plainObject判断实现
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != '[object Object]') {
    return false
  }
  if (Object.getPrototypeOf(value) === null) {
    return true
  }
  let proto = value
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(value) === proto
}
 */

/*
jq源码中的实现
const toString = Object.prototype.toString;
  const fnToString = Function.prototype.toString;
  const getProto = Object.getPrototypeOf;

  function isPlainObject( obj ) {
    var proto, Ctor;

    if ( !obj || toString.call( obj ) !== "[object Object]" ) {
      return false;
    }

    proto = getProto( obj );
    //在这里使用Object.create( null )创建的对象也是plainObject
    // Objects with no prototype (e.g., `Object.create( null )`) are plain
    if ( !proto ) {
      return true;
    }

    // Objects with prototype are plain iff they were constructed by a global Object function
    Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
    return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
  }

 */

