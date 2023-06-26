<template>
    <div class="wrap" @[event]="show">
        测试
    </div>
    <form>
        <button type="button">Submit</button>
        <button type="submit" name="submit_button">Special Submit</button>
    </form>
</template>

<script setup lang="ts">
const event: string = 'click'
const show = () => console.log('星爷')
</script>

<style lang="less" scoped></style>
