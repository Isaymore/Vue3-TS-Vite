<template>
  <div class="wrap">
    <div>state:{{ state }}</div>
    <button @click="plusOne">+1</button>
    <div>count:{{ count }}</div>
    <button @click="plusTwo">+2</button>
    <div>state2:{{ state2 }}</div>
    <button @click="subOne">-1</button>
    <div>fooRef:{{ fooRef }}</div>
    <button @click="updateFoo">updateFoo</button>
    <div>barRef:{{ barRef }}</div>
    <button @click="updateBar">updateBar</button>
  </div>
</template>

<script setup lang="ts">
import { watch, reactive, ref } from 'vue'
const state = reactive({ count: 0 })
// 侦听一个 getter 函数，侦听响应式对象的某个属性
watch(() => state.count, (newVal, oldVal) => {
  console.log('newVal', newVal, typeof newVal)
  console.log('oldVal', oldVal, typeof oldVal)
})
const plusOne = () => {
  state.count++
}
const count = ref(0)
// 侦听一个 ref
watch(count, (newVal, oldVal) => {
  console.log('newVal', newVal, typeof newVal)
  console.log('oldVal', oldVal, typeof oldVal)
  console.log('newVal === oldVal', newVal === oldVal)
})
const plusTwo = () => {
  count.value += 2
}
// 侦听一个响应式对象
// 当直接侦听一个响应式对象时，侦听器会自动启用深层模式
const state2 = reactive({ count: 0 })
watch(state2, (newVal, oldVal) => {
  console.log('newVal', newVal, typeof newVal)
  console.log('oldVal', oldVal, typeof oldVal)
  // 新值和旧值将是同一个对象
  console.log('newVal===oldVal', newVal === oldVal)
})
const subOne = () => {
  state2.count--
} 
const fooRef = ref('foo')
const barRef = ref('bar')
// 侦听多个来源组成的数组，回调函数接受两个数组
// watch([fooRef, barRef], ([foo, bar], [preFoo, preBar]) => {
//   console.log('星爷-fooRef', fooRef, typeof fooRef)
//   console.log('星爷-barRef', barRef, typeof barRef)
//   console.log('星爷-foo', foo, typeof foo)
//   console.log('星爷-bar', bar, typeof bar)
//   console.log('星爷-preFoo', preFoo, typeof preFoo)
//   console.log('星爷-preBar', preBar, typeof preBar)
// })
watch([fooRef, barRef], (newVal, oldVal) => {
  console.log('newVal', newVal, typeof newVal)
  console.log('oldVal', oldVal, typeof oldVal)
})
const updateFoo = () => {
  fooRef.value = 'newFoo'
}
const updateBar = () => {
  barRef.value = 'newBar'
}
</script>

<style lang="less" scoped></style>
