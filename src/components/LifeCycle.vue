<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'

const el = ref(111)
onBeforeMount(() => {
    el.value // <div>
    console.log('onBeforeMount-el', el, typeof el)
    console.log('onBeforeMount-el.value', el.value, typeof el.value)
})
onMounted(() => {
    el.value // <div>
    console.log('onMounted-el', el, typeof el)
    console.log('onMounted-el.value', el.value, typeof el.value)
})
</script>

<template>
    <div ref="el"></div>
</template>