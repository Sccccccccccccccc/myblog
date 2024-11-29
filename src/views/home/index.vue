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
        <el-card class="mobile-top-card" style="background: gray;">
          top
        </el-card>

        <el-card class="mobile-bottom-card" style="background: gray;">
          bottom
        </el-card>
      </el-col>

      <el-row :xs="0" :sm="6">
        <RightSide></RightSide>
      </el-row>

    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.mobile-top-card {
  height: 31rem;
  margin: 4px;

  :deep(.info-avatar) {
    padding: 0 2rem;
  }

  :deep(.personal-say) {
    padding-left: 1rem;
  }

  :deep(.info-background) {
    height: 12rem;
    width: 100%;
  }

  :deep(.common-menu) {
    padding: 1rem 5.5rem;
  }

  :deep(.git-ee) {
    padding: 0 4rem;
  }

  :deep(.personal-link) {
    padding: 1rem 6rem;
  }
}
.mobile-bottom-card {
  margin: 4px;
  padding: 1rem;
  .icon-localoffer {
    font-weight: 900;
  }
  span {
    margin-left: 0.3rem;
  }
  .site-info {
    padding: 0.3rem 1rem;
    line-height: 2;
    font-size: 1rem;

    .value {
      font-weight: 600;
    }
  }
}

</style>