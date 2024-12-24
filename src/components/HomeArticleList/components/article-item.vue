<script setup lang="ts">
import { toRaw } from 'vue';
const props = defineProps({
    articleData: {
        type: Object,
        default: () => ({})
    },
    index: {
        type: Number,
        default: 0
    }
})
const article = toRaw(props.articleData);

</script>

<template>
    <div class="flex justify-between items-center w-full h-full relative article_card" :class="{
        'flex-row-reverse pr-8': index % 2 == 0,
        'pl-8': index % 2 != 0,
    }">
        <div class="article_info" :class="{ 'ml-4': index % 2 == 0 }">
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
@media screen and (max-width: 768px) {
    .article_card {
        flex-direction: column-reverse;
        padding: 0;
    }

    .article_cover {
        width: 100%;
        border-radius: 4px;
        overflow: hidden;
        background: gray;
        height: 100%;
    }

    .article_info {
        display: flex;
        flex: 1;
        flex-direction: column;
        font-size: 0.8rem;
        width: 100%;
        padding: 1rem;
        .title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 0.5rem;
            width: fit-content;
        }

        .title:hover {
            color: #409eff;
            cursor: pointer;
        }

        .info {
            color: #999;
            margin-bottom: 0.5rem;
            width: fit-content;
        }

        .info:hover {
            color: #409eff;
            cursor: pointer;
        }
    }
}

// pc
@media screen and (min-width: 768px) {
    .article_info {
        display: flex;
        flex: 1;
        flex-direction: column;
        font-size: 0.8rem;

        .title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 0.5rem;
            width: fit-content;
        }

        .title:hover {
            color: #409eff;
            cursor: pointer;
        }

        .info {
            color: #999;
            margin-bottom: 0.5rem;
            width: fit-content;
        }

        .info:hover {
            color: #409eff;
            cursor: pointer;
        }
    }

    .article_cover {
        position: relative;
        width: 40%;
        right: 0;
        height: 100%;
        background: gray;
        border-radius: 4px;
        overflow: hidden;
    }
}
</style>