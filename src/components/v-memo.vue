<template>
    <div>
        <div v-for="item in list" :key="item.id" v-memo="[item.id === selected]" @click="select(item.id)">
            <p>ID: {{ item.id }} - selected: {{ item.id === selected }}</p>
        </div>
    </div>
</template>
  
<script setup lang='ts'>
import { ref, reactive } from 'vue'

const list = reactive<any[]>([])
for (let i = 0; i < 10000; i++) {
    list.push({
        id: i + 1,
        name: "test"
    })
}

const selected = ref(1)

const select = async (id: number) => {
    console.log('星爷-select-selected.value-前', selected.value)
    console.log('星爷-select-id-前', id)
    selected.value = id;
    console.log('星爷-select-selected.value-后', selected.value)
    console.log('星爷-select-id-后', id)
    console.log('console.time',console.time,typeof console.time)
    console.log('console.timeEnd',console.timeEnd,typeof console.timeEnd)
    console.time(id.toString())
    await Promise.resolve()
    console.timeEnd(id.toString())
}

</script>
  
<style scoped lang='less'></style>
  