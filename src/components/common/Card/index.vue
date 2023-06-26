<template>
    <div class="card">
        <div class="card-header">
            <div>{{ title }}</div>
            <div>{{ subtitle }}</div>
        </div>
        <div v-if="content" class="card-content">
            {{ content }}
        </div>
    </div>
</template>
   
<script setup lang="ts">
interface Props {
    title?: string,
    subtitle?: string,
    content?: string
}
withDefaults(defineProps<Props>(), {
    title: '标题',
    subtitle: '副标题',
    content: '内容'
})


</script>
   
<style scoped lang='less'>
@border: #ccc;

.card {
    width: 300px;
    border: 1px solid @border;
    border-radius: 3px;

    &:hover {
        box-shadow: 0 0 10px @border;
    }

    &-header {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid @border;
    }

    &-content {
        padding: 10px;
    }
}
</style>