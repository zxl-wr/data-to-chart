import { defineStore } from 'pinia';
import { objArrTo2dArr, ArrKeepDecimal } from '@/utils/handleData';

export const useDataStore = defineStore({
  id: 'data',
  state: () => ({
    data: [
      ['默认数据', '1', '2', '3'],
      ['1', 1, 2, 3],
      ['2', 4, 5, 6],
      ['3', 7, 8, 9],
    ],
    length: 3,
  }),
  actions: {
    handleData(data) {
      let arr = objArrTo2dArr(data); // 先转化为二维数组
      this.data = ArrKeepDecimal(arr, 3); // 所有数据保存三位小数
      this.length = arr[0].length - 1; // 数据长度
    },
  },
});
