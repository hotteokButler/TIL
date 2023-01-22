// javasript를 migration하지 않고 그대로 type protection과 함께 쓰려면
// tsconfig.json 에서 "compilerOptions" 에 { "allowJS" : true } 후 해당 js module file 에서 "@ts-check" 사용
// + JSDoc 함께 사용 : function with comments

//@ts-check
/**
 * Initialize the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} number
 * @returns {number}
 */
export function exit(number) {
  return number + 1;
}
