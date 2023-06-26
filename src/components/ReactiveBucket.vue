<template>
    <div class="wrap">
        爱好：{{ hobbyList }}
        <hr>
        原始数：{{ original }} &nbsp;
        readonly:{{ copy }}
        <div>shallowReactive:{{ state }}</div>
        <button @click="change1">更改状态第一级的属性</button>
        <button @click="change2">更改状态第二级的属性</button>
    </div>
</template>

<script setup lang="ts">
import { reactive, readonly, shallowReactive, isReactive } from 'vue';

let hobbyList = reactive<string[]>([])
type Original = {
    count: number
}
const original = reactive<Original>({ count: 0 })
const copy = readonly(original)
// copy.count++
console.log('星爷-original', original, typeof original);
console.log('星爷-copy', copy, typeof copy);
console.log('星爷-original===copy', original === copy);
const state = shallowReactive({
    foo: 1,
    nested: {
        bar: 2
    }
})
const change1 = () => {
    // 更改状态自身的属性是响应式的
    state.foo = 666
    // state.nested.bar = 999
}
const change2 = () => {
    // state.nested = {
    //     bar: 888
    // }
    const bool = isReactive(state.nested)
    console.log('星爷-bool', bool)
    // 不是响应式的，因为下层嵌套对象state.nested不会被转为响应式代理实例
    state.nested.bar = 999
    console.log('星爷-change2-state', state)
}

setTimeout(() => {
    const arr = ['学习', '吃饭', '睡觉']
    hobbyList.push(...arr)
    // console.log('星爷-hobbyList',hobbyList,typeof hobbyList);

}, 1000);
</script>

<style lang="less" scoped></style>
