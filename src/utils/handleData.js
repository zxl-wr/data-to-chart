/**
 * 对象数组转二维数组
 * @param {Array} objArr 数组对象
 * @returns 二维数组
 */
export const objArrTo2dArr = (objArr) => {
  let arr = [];
  objArr.forEach((item) => {
    arr.push(Object.values(item));
  });
  return arr;
};

/**
 * 循环数组，数字类型保留 m 位小数
 * @param {Array} arr 数组
 * @param {Number} m 保留几位小数
 * @returns 保留 m 位小数的数组
 */
export const ArrKeepDecimal = (arr, m) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i == 0) {
        arr[i][j] = arr[i][j].toString(); // 第一行全部为字符串，以防被识别为数据
      }
      arr[i][j] = keepFewNum(arr[i][j], m);
    }
  }
  return arr;
};

/**
 * 保留 m 位小数
 * @param {Number} value 数值
 * @param {Number} m 保留小数位数
 * @returns m 位小数
 */
export const keepFewNum = (value, m) => {
  if (typeof value == 'number') {
    const index = value.toString().indexOf('.') + 1; //小数点的位置
    const num = value.toString().length - index; //小数的位数
    if (index && num > m) {
      value = value.toFixed(m);
    }
  }
  return value;
};
