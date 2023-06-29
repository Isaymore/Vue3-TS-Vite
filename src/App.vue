<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import Event from './components/Event.vue';
// import ReactiveBucket from './components/ReactiveBucket.vue';
// import computed from './components/computed.vue';
// import ComputedCase from './components/ComputedCase.vue';
// import watch from './components/watch.vue';
// import WatchEffect from './components/WatchEffect.vue';
// import LifeCycle from './components/LifeCycle.vue'
// import Menu from './components/Menu/index.vue'
// import Header from './components/Header/index.vue'
// import Content from './components/Content/index.vue'
// const getSeasonList = (val: string[]) => {
//   console.log('val', val, typeof val)
// }
// import Card from './components/common/Card/index.vue'
// import Tree from './components/Tree.vue';
// import { reactive } from 'vue'
// type TreeNode = {
//   name: string,
//   children?: TreeNode[] | []
// };
// const data = reactive<TreeNode[]>([
//   {
//     name: "no.1",
//     children: [
//       {
//         name: "no.1-1",
//         children: [
//           {
//             name: "no.1-1-1",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "no.2",
//     children: [
//       {
//         name: "no.2-1",
//       },
//     ],
//   },
//   {
//     name: "no.3",
//   },
// ]);
// import DynamicComponent from './components/DynamicComponent/index.vue'
import Slot from './components/Slot/index.vue'
</script>

<template>
  <Slot/>
  <!-- <DynamicComponent/> -->
  <!-- <Tree :data="data"></Tree> -->
  <!-- <Card title="主业" subtitle="副业" content="up主"></Card> -->
  <!-- <div class="layout">
          <div class="layout-right">
            <Menu msg="爱好" :hobby-list="['学习', '吃饭', '睡觉']" @on-click="getSeasonList"></Menu>
            <Header></Header>
            <Content></Content>
            </div>
            </div> -->
  <!-- <LifeCycle/> -->
  <!-- <WatchEffect/> -->
  <!-- <watch/> -->
  <!-- <ComputedCase/> -->
  <!-- <computed/> -->
  <!-- <ReactiveBucket/> -->
  <!-- <Event/> -->
  <!-- <div>
                      <a href="https://vitejs.dev" target="_blank">
                        <img src="/vite.svg" class="logo" alt="Vite logo" />
                      </a>
                      <a href="https://vuejs.org/" target="_blank">
                        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
                      </a>
                    </div>
                    <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
