<script lang="ts" setup>

import Header from '@/components/header/header.vue';
import RightSide from "@/components/RightSide/right-side.vue";
import RightSideSkeleton from '@/components/Skeleon/rightSide_Skeleon/index.vue'

import { ref } from 'vue'
const loading = ref(false)

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

        <el-card class="mobile-bottom-card">

          HomeArticleList
          
        </el-card>

        <el-card class="mobile-bottom-card">
          bottom
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
</style>