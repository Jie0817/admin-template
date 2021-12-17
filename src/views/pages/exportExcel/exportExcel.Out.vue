<template>
  <el-button type="primary" round @click="getExcel(tableData,'导出')">导出Excel表格</el-button>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>


<script lang="ts">
import { defineComponent,reactive , ref , onMounted, computed } from 'vue'
export default defineComponent({
  title : '表格导出',
  setup(){

    interface tableDataType{
      [key:string] : any
    }
    const tableData = reactive([
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
    )
    // 导出
    const getExcel = function(list:tableDataType[], name:string){
      require.ensure([], () => {
        const { export_json_to_excel } = require('./Export2Excel.js');
        const tHeader = ['date','name','address'];
        const filterVal = ['date','name','address'];
        const data = list.map(v => filterVal.map(j => v[j]));
        export_json_to_excel(tHeader, data, name);
      })
    }
    return {
      tableData,
      getExcel,
    }
  }
})
</script>
