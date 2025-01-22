<script lang="ts" setup>
import router from '@/router';
import { computed, onMounted } from 'vue';

import { useHomeStore } from '@/store/home';

import Header from '@/components/header/header.vue';

const store = useHomeStore();
const articleDetail = computed(() => store.articleDetail[0]);

onMounted(() => {
    console.log("article mounted", articleDetail);
})

</script>

<template>
    <Header 
        :src="articleDetail.article_cover" 
        :title="articleDetail.article_title"
    ></Header>
    <div class="home_center_box">
        <el-row>
            <el-col :xs="24" :sm="18">
                <el-card class="m-[4px]">
                    <div class="article" v-html="articleDetail.article_content"></div>
                </el-card>
            </el-col>
            <el-col :xs="0" :sm="6">
                <el-card class="m-[4px]">
                    <div class="p-[20px]">木路</div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>
.article {
    min-height: calc(100vh);
    padding: 20px;
    box-sizing: border-box;
    line-height: 1.8rem;
    word-spacing: 0.1rem;
}
</style>