<template>
    <div class="wrap">
        <FancyButton>
            <!-- 插槽内容 -->
            <!-- Click me! -->
            <span style="color:red">Click me!</span>
        </FancyButton>
        <SubmitButton>Save</SubmitButton>
        <BaseLayout>
            <template #header>
                <h1>Here might be a page title</h1>
            </template>
            <!-- 更推荐：使用显式的默认插槽 -->
            <template #default>
                <p>A paragraph for the main content.</p>
                <p>And another one.</p>
            </template>
            <template #footer>
                <p>Here's some contact info</p>
            </template>
        </BaseLayout>
        <SlotProps v-slot:default="slotProps">
            {{ slotProps.text }} -- {{ slotProps.count }}
        </SlotProps>
        <SlotProps v-slot="slotProps">
            {{ slotProps.text }} -- {{ slotProps.count }}
        </SlotProps>
        <SlotProps #default="{ text, count }">
            {{ text }} -- {{ count }}
        </SlotProps>
        <MyComponent>
            <template #header="headerProps">
                {{ headerProps }}
            </template>
            <template #default="defaultProps">
                {{ defaultProps }}
            </template>
            <template #footer="footerProps">
                {{ footerProps }} 
            </template>
        </MyComponent>
    </div>
</template>

<script setup lang="ts">
import MyComponent from './MyComponent.vue'
import SlotProps from './SlotProps.vue';
import BaseLayout from './BaseLayout.vue';
import SubmitButton from './SubmitButton.vue';
import FancyButton from './FancyButton.vue';
</script>

<style lang="less" scoped></style>
