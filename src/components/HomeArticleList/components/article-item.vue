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
    <div class="flex justify-between items-center w-full h-full relative">
        <div class="article_info">
            <div>
                {{ article.article_title }}
            </div>
            <div>
                发表于：{{ article.create_time }}
            </div>
            <div>
                更新于：{{ article.update_time || article.create_time }}
            </div>
        </div>
        <div class="article_cover">
            <el-image :src="article.article_cover" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.article_info {
    display: flex;
    flex-direction: column;
}

.article_cover {
    position: absolute;
    width: 40%;
    right: 0;
    height: 100%;
    background: gray;
    border-radius: 4px;
}
</style>