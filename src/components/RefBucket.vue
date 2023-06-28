<template>
    <div class="wrap">
        ref的数据响应是深层的:{{ idolInfo }}
        <button @click="changeName">改名ref</button>
        <hr>
        shallowRef的数据响应是浅层的:{{ idolInfo3 }}
        <button @click="changeName3">改名shallowRef</button>
        <hr>
        customRef:{{ myName }}
        <button @click="changeName4">改名customRef</button>
        <div ref="dom">测试ref属性</div>
    </div>
</template>

<script setup lang="ts">
import { ref, isRef, shallowRef, triggerRef, customRef } from 'vue'
import type { Ref, ShallowRef } from 'vue'  // Ref是interface
type Idol = {
    name: string
}
// 泛型表示方法一
// const idolInfo = ref<Idol>({
//     name:'星爷'
// })
// 泛型表示方法二
const idolInfo: Ref<Idol> = ref({
    name: '星爷'
})
const idolInfo2 = {
    name: '周董'
}
const idolInfo3: ShallowRef<Idol> = shallowRef({
    name: '胡歌'
})
const changeName = () => {
    console.log('idolInfo前-idolInfo', idolInfo);
    idolInfo.value.name = '周星星同学'
    // idolInfo3.value.name = '老胡'
    console.log('idolInfo后-idolInfo', idolInfo);
    console.log('isRef-idolInfo', isRef(idolInfo))
    console.log('isRef-idolInfo2', isRef(idolInfo2))
    console.log('dom.value.innerText', dom.value?.innerText)
}
const changeName3 = () => {
    console.log('idolInfo3前-idolInfo3', idolInfo3);
    idolInfo3.value.name = '老胡'
    // idolInfo3.value = {
    //     name: '老胡'
    // }
    triggerRef(idolInfo3)
    console.log('idolInfo3后-idolInfo3', idolInfo3);
}
const changeName4 = () => {
    console.log('myName前-myName', myName);
    myName.value = '小彬彬'
    console.log('myName后-myName', myName);
}
// 自定义创建一个防抖ref(useDebounceRef)
function useDebounceRef<T>(value: T, delay: number = 2000) {
    return customRef((track, trigger) => {
        let timer;
        return {
            get() {
                console.log(`从useDebounceRef这个容器读取数据,data:${value}`);
                // track通知追踪value的变化(跟getter商量一下让它明确你这个value是有用的)
                track();
                return value;
            },
            set(newVal) {
                console.log(`useDebounceRef容器中的数据被修改,data改为${newVal}`);
                timer = setTimeout(() => {
                    value = newVal;
                    trigger(); // trigger通知触发vue重新解析模版
                }, delay);
            }
        }
    })
}
// 使用自定义ref
const myName = useDebounceRef<string>('customRef彬彬')
const dom = ref<HTMLDivElement>()
</script>
 
<style lang="less" scoped></style>
