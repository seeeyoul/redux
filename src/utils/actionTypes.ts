/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */

/**
 * 三种redux预留的action types =>
 *                            INIT(reducer的初始化类型)
 *                            REPLACE(reducer的替换类型)
 *                            PROBE_UNKNOWN_ACTION(随机类型)，
 * 为了确保这三种types的唯一性，在每个type的末尾加了一个随机生成的字符串，来确保types的唯一性
 * */

const randomString = () =>
  Math.random().toString(36).substring(7).split('').join('.')

const ActionTypes = {
  INIT: `@@redux/INIT${/* #__PURE__ */ randomString()}`,
  REPLACE: `@@redux/REPLACE${/* #__PURE__ */ randomString()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
}

export default ActionTypes
