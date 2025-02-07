<script lang="ts" setup>
import router from '@/router';
import { computed, onMounted, reactive } from 'vue';
import { useHomeStore } from '@/store/home';
import Header from '@/components/header/header.vue';

import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
const scrollElement = document.documentElement;

import { storeToRefs } from "pinia";
import { useThemeSwitchStore } from '@/store/themeSwitch'
const themeSwitchStore = useThemeSwitchStore()
const { mainTheme } = storeToRefs(themeSwitchStore);
const store = useHomeStore();
const articleDetail = computed(() => store.articleDetail[0]);

// 模仿获取md文档信息
const mdState = reactive({
  text: "",
  id: "my-editor",
  switch: true,
});

mdState.text = articleDetail.value.article_content;

onMounted(() => {
    console.log("article mounted", articleDetail);
})

</script>

<template>
    <Header :src="articleDetail.article_cover" :title="articleDetail.article_title"></Header>
    <div class="home_center_box">
        <el-row>
            <el-col :xs="24" :sm="18">
                <el-card class="m-[4px]">
                    <!-- <div class="article" v-html="articleDetail.article_content"></div> -->
                    <MdPreview 
                        class="md-preview-v3"
                        v-model="mdState.text" 
                        :editorId="mdState.id"
                        :code-theme="'atom'"
                        :preview-theme="'default'"
                        :theme="mainTheme ? 'dark' : 'light'"
                        :scroll-element="scrollElement"
                    >
                    </MdPreview>
                </el-card>
            </el-col>
            <el-col :xs="0" :sm="6">
                <el-card class="m-[4px] sticky top-[5px]">
                    <div class="p-[20px]">
                        <MdCatalog :editorId="mdState.id" :scrollElement="scrollElement" />
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-card class="info">
                更新时间：{{ articleDetail.article_update_time || articleDetail.create_time }}
            </el-card>
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

.info {
    margin: 4px;
    text-align: center;
    font-size: 14px;
    color: #999;
    padding: 10px 20px;
}

// 对于markdown样式的调整
.md-preview-v3 {
  background: rgba(31, 31, 31, 0.3);
}

.code-block::scrollbar-thumb {
  background-color: #efbcda !important;
}
.code-block::-webkit-scrollbar-thumb {
  background-color: #efbcda !important;
}

</style>