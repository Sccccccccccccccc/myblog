<script lang="ts" setup>

import Header from '@/components/header/header.vue';
import RightSide from "@/components/RightSide/right-side.vue";
import RightSideSkeleton from '@/components/Skeleon/rightSide_Skeleon/index.vue'
import homeArticleList from '@/components/HomeArticleList/home-article-list.vue';
import { computed, onMounted, reactive, ref } from 'vue'

// const loading = ref(false)
import { useHomeStore } from '@/store/home';
const store = useHomeStore();
const loading = computed(() => store.loading);

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
              DOM
            </template>
          </el-skeleton>
        </el-card>

        <homeArticleList />

        <el-card class="mobile-top-card" style="height: fit-content;">
          <el-skeleton :loading="loading" animated>
            <template #template> 
              Skeleton
            </template>
            <template #default>
              <div class="flex flex-col gap-2">
                <span>
                  网站资讯
                </span>
                <span class="flex justify-between text-sm">
                  总文章数 : <span class="font-bold text-sm">0</span>
                </span>
                <span class="flex justify-between text-sm">
                  运行时间 : <span class="font-bold text-sm">0 天</span>
                </span>
                <span class="flex justify-between text-sm">
                  网站访问次数 : <span class="font-bold text-sm">0</span>
                </span>
                <span class="flex justify-between text-sm">
                  vivo50 : <span class="font-bold text-sm">0</span>
                </span>
              </div>
            </template>
          </el-skeleton>
        </el-card>

      </el-col>

      <el-col :xs="0" :sm="6">
        <RightSide></RightSide>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped></style>