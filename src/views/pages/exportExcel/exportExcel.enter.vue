<template>
<el-upload
    class="upload-demo"
    :on-change="beforeUpload"
    :show-file-list="false"
    :auto-upload="false"
    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
  >
    <el-button type="primary" round>导入Excel表格</el-button>
  </el-upload>
  <el-table :data="tableData" style="width: 100%" empty-text="暂无数据">
    <el-table-column v-for="(item ,index) in tableKey" :key="index" :prop="item" :label="item" />
  </el-table>
</template>


<script lang="ts">
import { defineComponent , ref } from 'vue'
import { ElMessage } from 'element-plus'
export default defineComponent({
  title : '表格导入',
  setup(){

    interface tableDataType{
      [key:string] : any
    }
    const File = ref();
      let tableData = ref([])
      let tableKey = ref<string[]>([])
      
      
      const beforeUpload = function(file:tableDataType){
        console.log(file);
        importfxx(file.raw)
        if(file.raw){
            if((file.raw.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || (file.raw.type == 'application/vnd.ms-excel')){
                importfxx(file.raw)
            } else {
                ElMessage({
                  showClose: true,
                  message: '附件格式错误，请重新上传！',
                  type: 'warning',
                })
            }
        } else {
            ElMessage({
              showClose: true,
              message: '请上传附件',
              type: 'warning',
            })
        }
      }

      const fixdata = <t>(fixdata:t):t => {
        console.log(fixdata)
        return fixdata
      }

      const importfxx = function(obj:tableDataType) {
        // 通过DOM取文件数据
        File.value = obj
        var rABS:boolean = false; //是否将文件读取为二进制字符串
        var f = File.value;
        var reader = new FileReader();

        FileReader.prototype.readAsBinaryString = function(f) {
            var binary = "";
            var rABS = true; //是否将文件读取为二进制字符串
            var wb = null; //读取完成的数据
            var reader = new FileReader();
            reader.onload = function(e) {
              var bytes = new Uint8Array(reader.result as ArrayBufferLike);
              var length = bytes.byteLength;
              for(var i = 0; i < length; i++) {
                  binary += String.fromCharCode(bytes[i]);
              }
              var XLSX = require('xlsx');
              if(rABS) {
                  wb = XLSX.read(btoa(fixdata(binary)), { //手动转化
                      type: 'base64'
                  });
              } else {
                  wb = XLSX.read(binary, {
                      type: 'binary'
                  });
              }
              tableData.value = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
              
              tableKey.value =Object.keys(tableData.value[0])
              
            }
            reader.readAsArrayBuffer(f);
        }
        
        if(rABS) {
            reader.readAsArrayBuffer(f);
        } else {
            reader.readAsBinaryString(f);
        }
    }




    return {
      tableData,
      tableKey,
      beforeUpload,
    }
  }
})
</script>
