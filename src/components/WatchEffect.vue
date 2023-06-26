<template>
    <div class="wrap">
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const count = ref<number>(0)
// const count: Ref<number> = ref(0)
const res = watchEffect(() => {
    console.log(count.value)
})
console.log('res', res, typeof res)
count.value++
</script>

<style lang="less" scoped></style>
