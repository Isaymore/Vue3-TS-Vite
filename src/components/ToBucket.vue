<template>
  <div class="wrap">
    <div>toRef-源对象是非响应式：{{ obj }} <button @click="change1">change1</button></div>
    <div>toRef-源对象是响应式：{{ state }} <button @click="change2">change2</button></div>
    <div>toRefs-源对象是响应式：{{ state1 }} <button @click="change3">change3</button></div>
  </div>
</template>

<script setup lang="ts">
import { toRef, reactive, toRefs, toRaw } from 'vue';
type Obj = {
  foo: number,
  bar: number
}
const obj: Obj = {
  foo: 1,
  bar: 2
}
const test = toRef(obj, 'foo')
const change1 = () => {
  console.log('星爷-change1-test', test, typeof test);
  test.value++
  console.log('星爷-change1-obj', obj, typeof obj);
  console.log('星爷-change1-test', test, typeof test);
}
obj.foo++
console.log('星爷-test.value', test.value, typeof test.value);

const state = reactive<Obj>({
  foo: 1,
  bar: 2
})

// 双向 ref，会与源属性同步
const fooRef = toRef(state, 'foo')
const change2 = () => {
  console.log('星爷-change2-fooRef', fooRef, typeof fooRef);
  // 更改该 ref 会更新源属性
  fooRef.value++
  console.log('星爷-change2-state', state, typeof state);
  console.log('星爷-change2-state.foo', state.foo, typeof state.foo);
  console.log('星爷-change2-state', state, typeof state);
}
// 更改源属性也会更新该 ref
state.foo++
console.log('星爷-fooRef.value', fooRef.value, typeof fooRef.value);

const state1 = reactive<Obj>({
  foo: 1,
  bar: 2
})
const stateAsRefs = toRefs(state1)
console.log('星爷-stateAsRefs', stateAsRefs, typeof stateAsRefs)
const change3 = () => {
  const { foo, bar } = stateAsRefs
  foo.value++
  console.log('星爷-change3-foo', foo, typeof foo)
  console.log('星爷-change3-state1', state1, typeof state1)
}
state1.foo++
console.log('星爷-stateAsRefs.foo.value', stateAsRefs.foo.value, typeof stateAsRefs.foo.value);

const obj1: Obj = {
  foo: 1,
  bar: 2
}
const reactiveObj1 = reactive(obj1)
console.log('reactiveObj1', reactiveObj1, typeof reactiveObj1);
// 将响应式代理实例转化为原始的普通对象
console.log('toRaw(reactiveObj1)', toRaw(reactiveObj1), typeof toRaw(reactiveObj1));
console.log('toRaw(reactiveObj1) === obj1', toRaw(reactiveObj1) === obj1);

</script>

<style lang="less" scoped></style>
