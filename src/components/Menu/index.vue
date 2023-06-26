<template>
  <div class="wrap">
    msg：{{ msg }}
    <ul>
      <li v-for="(item, index) in hobbyList" :key="index">{{ item }}</li>
    </ul>
    <button @click="sendSeasonList">子传父</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
// const props = defineProps<{
//   msg: string,
//   hobbyList?: string[]
// }>()
interface Props {
  msg: string,
  hobbyList?: string[]
}
// 使用类型声明时的默认 props 值
const props = withDefaults(defineProps<Props>(), {
  msg: '偶像',
  hobbyList: () => ['星爷', '周董', '胡歌']
})
console.log('props', props, typeof props)
const seasonList = reactive<string[]>(['Spring', 'Summer', 'Autumn', 'Winter'])
const emit = defineEmits<{
  onClick: [seasonList: string[]] // 具名元组语法
}>()
console.log('emit', emit, typeof emit)
const sendSeasonList = () => {
  emit('onClick', seasonList)
}
</script>

<style lang="less" scoped></style>
