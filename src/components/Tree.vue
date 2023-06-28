<template>
    <div class="tree" v-for="(item, index) in data" :key="index">
        <input type="checkbox"><span>{{ item.name }}</span>
        <Tree v-if="item?.children?.length" :data="item.children"></Tree>
    </div>
</template>

<script setup lang="ts">
interface TreeNode {
    name: string,
    children?: TreeNode[]
}
defineProps<{
    data?: TreeNode[]
}>()
</script>

<style lang="less" scoped>
.tree {
    padding-left: 10px;
}
</style>
