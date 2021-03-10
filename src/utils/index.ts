const judgeType = (val: any, typeString: string) => Object.prototype.toString.call(val) === typeString;

export const ut = {
  isString: (val: any) => judgeType(val, "[object String]"),
  isNumber: (val: any) => judgeType(val, "[object Number]"),
  isBoolean: (val: any) => judgeType(val, "[object Boolean]"),
  isArray: (val: any) => judgeType(val, "[object Array]"),
  isObject: (val: any) => judgeType(val, "[object Object]"),
  isSymbol: (val: any) => judgeType(val, "[object Symbol]"),
  isNull: (val: any) => judgeType(val, "[object Null]"),
  isUndefined: (val: any) => judgeType(val, "[object Undefined]"),
};
