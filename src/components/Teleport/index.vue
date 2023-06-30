<template>
    <div class="wrap">
        <div class="modal"></div>
        <teleport to='.modal'>
            <Dialog></Dialog>
        </teleport>
    </div>
</template>

<script setup lang="ts">
import Dialog from './Dialog.vue';
</script>

<style lang="less" scoped></style>
