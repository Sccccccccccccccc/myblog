<script setup lang="ts">
import { toRaw } from 'vue';
const props = defineProps({
    articleData: {
        type: Object,
        default: () => ({})
    }
})
const article = toRaw(props.articleData);
console.log("article-item", article);

</script>

<template>
    <div class="flex justify-between items-center w-full h-full relative px-8">
        <div class="article_info">
            <div class="title">
                {{ article.article_title }}
            </div>
            <div class="info">
                发表于：{{ article.create_time }}
            </div>
            <div class="info">
                更新于：{{ article.update_time || article.create_time }}
            </div>
        </div>
        <div class="article_cover">
            <el-image :src="article.article_cover" class="h-full w-full" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.article_info {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    .title {
        font-size: 1.2rem;
        font-weight: 600;
        color: #333;
        margin-bottom: 0.5rem;
    }
    .title:hover {
        color: #409eff;
        cursor: pointer;
    }
    .info {
        color: #999;
        margin-bottom: 0.5rem;
    }
    .info:hover {
        color: #409eff;
        cursor: pointer;
    }
}

.article_cover {
    position: absolute;
    width: 40%;
    right: 0;
    height: 100%;
    background: gray;
    border-radius: 4px;
    overflow: hidden;
}
</style>