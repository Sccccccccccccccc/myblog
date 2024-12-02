<script lang="ts" setup>

import Header from '@/components/header/header.vue';
import RightSide from "@/components/RightSide/right-side.vue";


</script>
<template>
  <Header></Header>
  <div class="home_center_box">
    <!-- element 响应式分栏布局 -->
    <!-- https://blog.csdn.net/woshisangsang/article/details/113241705 -->
    <el-row>
      <el-col :xs="24" :sm="18">
        <el-card class="mobile-top-card">
          <el-skeleton :loading="true" animated>
            <template #template>
              MobileTopSkeleton
              <!-- <MobileTopSkeleton /> -->
            </template>
            <template #default>
              RightSideTop
              <!-- <RightSideTop :configDetail="true" /> -->
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