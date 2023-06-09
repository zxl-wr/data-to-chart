<template>
  <read-excel></read-excel>
  <div class="box">
    <n-table :single-line="false">
      <tr v-for="(item, index) in Data.data" :key="index">
        <td style="white-space: nowrap;" v-for="(i, index) in item" :key="index">
          {{ i }}
        </td>
      </tr>
    </n-table>
  </div>
</template>

<script setup>
import { useDataStore } from '@/store/data.js';
import readExcel from './readExcel.vue';

const Data = useDataStore();
</script>

<style scoped>
.box {
  width: 100%;
  max-height: 64vh;
  overflow: auto;
}

.n-table {
  margin-top: 16px;
}
</style>
