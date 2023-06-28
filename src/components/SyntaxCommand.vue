<script setup lang="ts">
import { ref } from 'vue';
const name: string = '星爷'
const age: number = 16
const loveStr: string = '我，爱，星，爷'
const arr: number[] = [1, 2, 3]
const sentence: string = '人的悲欢并不相同，我只觉得他们吵闹'
const redSentence: string = '<span style="color: red">鲁迅先生</span>'
const gender: string = '男'
const isShow: Boolean = true
const onChild = () => console.log('我是子元素');
const onFather = () => console.log('我是父元素');
const onSubmit = () => console.log('阻止表单提交');
type Style = {
    color: string,
    fontSize: string
}
const styleObj: Style = {
    color: 'red',
    fontSize: '24px'
}
type Class = {
    'red-bgc': boolean,
    'gray-border': boolean
}
const classObj: Class = {
    'red-bgc': true,
    'gray-border': true
}
// const searchVal:string = '搜索关键词'
const searchVal = ref('搜索关键词')
const hobbyList: string[] = ['学习', '吃饭', '睡觉']
const onceTips = ref('一次性提示')
const updateTips = () => {
    onceTips.value = '更新提示'
    console.log('星爷-updateTips-onceTips', onceTips.value)
}
</script>
<template>
    <div>
        <div>偶像：{{ name }}</div>
        <div>年龄：{{ age === 16 ? '今年16岁' : '年龄不详' }}</div>
        <div>过完年，年龄大了一岁{{ age + 1 }}</div>
        <div>{{ loveStr.split('，') }}</div>
        <div>{{ arr }}，数据类型为：{{ typeof arr }}</div>
        <h3>vue指令</h3>
        <div>v-text显示文本:<span v-text="sentence"></span></div>
        v-html显示富文本:<div v-html="redSentence"></div>
        <div v-if="gender === '男'">v-if用来控制元素的显示隐藏（切换真假DOM）：<span>我是男的</span></div>
        <div v-else-if="gender === '女'">v-else-if 表示 v-if 的“else if 块：<span>我是女的</span></div>
        <div v-else>v-else 表示 v-if条件收尾语句：<span>我是人妖</span></div>
        <div v-if="isShow">v-if用来控制元素的显示隐藏（切换真假DOM）</div>
        <div v-show="isShow">v-show 用来控制元素的显示隐藏（display none block Css切换）</div>
        <div @click="onFather">
            <button @click.stop="onChild">点击子元素</button>
        </div>
        <form action="">
            <button @click.prevent="onSubmit">阻止表单提交</button>
        </form>
        <h3>样式和类名绑定：</h3>
        <div :style="styleObj">样式绑定</div>
        <div :class="classObj">类名绑定</div>
        v-model双向绑定:
        <input type="text" v-model="searchVal">
        searchVal:{{ searchVal }}
        <h3>v-for用来遍历元素--爱好如下：</h3>
        <div v-for="(item, index) in hobbyList" :key="index">{{ item }}</div>
        <div>v-once 性能优化只渲染一次：<span v-once>{{ onceTips }}</span></div>
        <button @click="updateTips">点击更新提示</button>
    </div>
</template>
<style lang="less" scoped>
.red-bgc {
    background-color: red;
}

.gray-border {
    border: 2px solid gray;
}
</style>