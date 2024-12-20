<script lang="ts" setup>

import Header from '@/components/header/header.vue';
import RightSide from "@/components/RightSide/right-side.vue";
import RightSideSkeleton from '@/components/Skeleon/rightSide_Skeleon/index.vue'
import homeArticleList from '@/components/HomeArticleList/home-article-list.vue';
import { onMounted, reactive, ref } from 'vue'
const loading = ref(false)

// const fn1 = async () => {
//   console.log("----- fn1");
// }
// async function fn2() {
//   console.log("---- fn2_1?");
//   await fn1().then(() => {
//     console.log("------- fn1.then");
//   })
//   console.log("-------- fn2");
// }
// new Promise((resolve) => {
//   console.log("- Promise");
//   resolve(1)
// }).then(() => {
//   console.log("------ Promise.then");
// })
// console.log("-- script");
// onMounted(() => {
//   console.log("--- onMounted");
//   setTimeout(() => {
//     console.log("setTimeout");
//   })
//   fn2().then(() => {
//     console.log("--------- fn2.then");
//   })
// })

</script>
<template>
  <Header></Header>
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
              <RightSideSkeleton />
            </template>
          </el-skeleton>
        </el-card>
        <homeArticleList />
      </el-col>

      <el-col :xs="0" :sm="6">
        <RightSide></RightSide>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>

</style>