<template>
    <div class="wrap">
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const count = ref<number>(1)
// 接受一个getter函数，创建一个只读的计算属性 ref
const plusOne = computed<number>(() => count.value + 1)
console.log('plusOne', plusOne, typeof plusOne)
console.log('plusOne.value', plusOne.value, typeof plusOne.value)
// plusOne.value++

// 接受一个带有 get 和 set 函数的对象，创建一个可写的计算属性 ref
const count2 = ref<number>(1)
const plusTwo = computed({
    get: () => {
        console.log('调用getter函数')
        return count2.value + 2
    },
    set: (val: number) => {
        console.log('调用setter函数')
        count2.value = val - 2
    }
})
console.log('plusTwo', plusTwo, typeof plusTwo);
plusTwo.value = 666
console.log('count2.value', count2.value, typeof count2.value);

const price = ref<string | number>(0)
let m = computed<string>(() => {
    return `$` + price.value
})
console.log('m', m, typeof m)
price.value = 500

</script>

<style lang="less" scoped></style>
