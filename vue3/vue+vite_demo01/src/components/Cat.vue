<template>
  <div>
    <!-- <div>{{ data }}</div> -->
    <el-button type="primary" @click="add()">添加</el-button>
    <el-table :data="state.data" style="width: 100%">
    <el-table-column prop="url" label="图片" width="180" >
      <template #default="scope">
        <el-avatar :size="50" :src="scope.row.url" />
      </template>
    </el-table-column>
    <el-table-column prop="id" label="id" width="180" />
    <el-table-column prop="width" label="width" />
  </el-table>
  </div>
</template>

<script setup lang="ts">
import { createApp, ref, reactive, nextTick, watch } from 'vue'
import { getApi } from '../api/requestList';

interface IMyEntity {
  id: string;
  height: number;
  width: number;
  url: string  
}
const state = reactive({
  data:[]
})
function add() {
  getApi({}).then((res:Array<never>)=> {
    state.data.push(res[0])
  }).catch((err)=> {
    console.log(err);
  })
}
</script>

<style>

</style>