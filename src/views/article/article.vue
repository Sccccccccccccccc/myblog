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
    articleDetail.value.update_time = new Date(articleDetail.value.update_time).toLocaleString()
})

function like() {

    console.log("like");
    
    

}

</script>

<template>
    <Header :src="articleDetail.article_cover" :title="articleDetail.article_title" />
    <div class="home_center_box">
        <el-row>
            <el-col :xs="24" :sm="18">
                <el-card class="m-[4px]">
                    <!-- <div class="article" v-html="articleDetail.article_content"></div> -->
                    <MdPreview class="md-preview-v3" v-model="mdState.text" :editorId="mdState.id" :code-theme="'atom'"
                        :preview-theme="'default'" :theme="mainTheme ? 'dark' : 'light'"
                        :scroll-element="scrollElement" />
                </el-card>

                <el-card class="m-[4px] flex" style="padding: 10px 20px;">

                    <div class="flex flex-col gap-[2rem]">

                        <div class="info gap-3">
                            <span>
                                作者：{{ articleDetail.id }}
                            </span>
                            <span>
                                更新时间：{{ articleDetail.update_time || articleDetail.create_time }}
                            </span>
                            <span>
                                更新时间：{{ articleDetail.update_time || articleDetail.create_time }}
                            </span>
                        </div>

                        <div class="text-center cursor-pointer">
                            <span @click="like">👍</span>
                            114514
                        </div>

                        <div class="recommend">
                            <div class="recommend-box" v-for=" i in 2" :key="i">
                                <span class="recommend-box-text">
                                    {{ i == 1 ? '上一篇' : '下一篇' }}
                                </span>
                                <el-image class="recommend-box-img" fit="cover" :src="articleDetail.article_cover" />
                            </div>
                        </div>

                        <div>
                            <span>评论 最热 最新</span>
                            <div class="p-5" style="border: 1px solid #ccc;">
                                <div class="flex gap-3">
                                    <el-avatar :size="40" :src="articleDetail.article_cover" />
                                    <div class="flex flex-col gap-3">
                                        <div class="flex gap-3">
                                            <span>用户名</span>
                                            <span>2023-01-01</span>
                                        </div>
                                        <div class="text-[14px]">
                                            评论内容
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

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
    display: flex;
    flex-direction: column;
    margin: 4px;
    font-size: 14px;
    color: #999;
    padding: 10px;
    border: 1px solid var(--font-color);
}

// 对于markdown样式的调整
.md-preview-v3 {
    background: rgba(255, 255, 255, 0.3);
}

.code-block::scrollbar-thumb {
    background-color: #efbcda !important;
}

.code-block::-webkit-scrollbar-thumb {
    background-color: #efbcda !important;
}

.recommend {
    margin: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    overflow: hidden;

    &-box {
        position: relative;
        overflow: hidden;
        height: 100%;
        width: 50%;

        &-text {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            z-index: 1;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }

        &:hover {
            .recommend-box-img {
                scale: 1.2;
            }

            cursor: pointer;
        }

        &-img {
            height: 100%;
            width: 100%;
            transition: all 0.3s ease-in-out;
        }
    }



}
</style>