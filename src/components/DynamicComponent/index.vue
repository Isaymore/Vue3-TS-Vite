<template>
    <div class="wrap">
        <div class="tab" :class="{ active: componentId === item.comName }" v-for="(item, index) in tabList" :key="index"
            @click="selectTab(item)">{{ item.name }}</div>
        <component :is="componentId"></component>
    </div>
</template>

<script setup lang="ts">
import A from './A.vue';
import B from './B.vue';
import C from './C.vue';
import { reactive, markRaw, ref } from 'vue'
interface Com {
    name: string,
    comName: {}
}
const tabList = reactive<Com[]>([{
    name: '学习',
    comName: markRaw(A)
}, {
    name: '吃饭',
    comName: markRaw(B)
}, {
    name: '睡觉',
    comName: markRaw(C)
}])
let componentId = ref(A)
const selectTab = (item: any) => {
    componentId.value = item.comName
}
</script>

<style lang="less" scoped>
.wrap {
    display: flex;

    .tab {
        padding: 10px;
    }

    .active {
        background-color: red;
    }
}
</style>
