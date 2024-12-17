<script lang="ts" setup>

import Header from '@/components/header/header.vue';
import RightSide from "@/components/RightSide/right-side.vue";
import RightSideSkeleton from '@/components/Skeleon/rightSide_Skeleon/index.vue'

import { onMounted, ref } from 'vue'
const loading = ref(false)
const rotate = ref(true)

function svgClick() {
  console.log("svgClick");
  rotate.value = true
  setTimeout(() => {
    rotate.value = false
  }, 300)

};

const fn1 = async () => {
  console.log("----- fn1");
}

async function fn2() {
  console.log("---- fn2_1?");
  await fn1().then(() => {
    console.log("------- fn1.then");
  })
  console.log("-------- fn2");
}

new Promise((resolve) => {
  console.log("- Promise");
  resolve(1)
}).then(() => {
  console.log("------ Promise.then");
})

console.log("-- script");
onMounted(() => {
  console.log("--- onMounted");
  setTimeout(() => {
    console.log("setTimeout");
  })
  fn2().then(() => {
    console.log("--------- fn2.then");
  })



})

</script>
<template>
  <!-- <Header></Header> -->
  <div class="home_center_box">
    <!-- element 响应式分栏布局 -->
    <!-- https://blog.csdn.net/woshisangsang/article/details/113241705 -->
    <el-row>
      <el-col :xs="24" :sm="18">
        <el-card class="mobile-top-card" style="height: fit-content;">
          <!-- Skeleton 插槽 -->
          <!-- #default: 真正渲染的DOM	 -->
          <!-- #template: 渲染 skeleton 模板的内容	 -->
          <el-skeleton :loading="loading" animated>
            <template #template>
              <RightSideSkeleton />
            </template>
            <template #default>
              <div class="text-sky-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                    clip-rule="evenodd" />
                </svg>
              </div>
            </template>
          </el-skeleton>
        </el-card>

        <el-card class="mobile-bottom-card">
          <div class="text-sky-400 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="fill-blue-500 size-6">
              <path fill-rule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </el-card>

        <el-card class="mobile-bottom-card">
          <div :class="{'rotate360': rotate}" @click="svgClick()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd"
                d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="0" :sm="6">
        <RightSide></RightSide>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.mobile-top-card {
  height: 31rem;
  margin: 4px;
}

.mobile-bottom-card {
  margin: 4px;
  padding: 1rem;
}


.rotate360 {
  animation: rotate360 .5s infinite 0s;
  width: fit-content;
}

@keyframes rotate360 {
  100% {
    transform: rotate(360deg);
  }
}
</style>