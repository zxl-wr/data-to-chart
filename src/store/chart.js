import { defineStore } from 'pinia';

export const useChartStore = defineStore({
  id: 'chart',
  state: () => ({
    color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570'], //调色盘
  }),
  actions: {},
});
