<script setup lang="ts">

import ArticleListSkeleton from '@/components/Skeleon/article_Skeleon/index.vue'

</script>

<template>
    <el-row>
        <template v-if="true">
            <el-col v-for="i in 5" :key="i">
                <el-card>
                    <div class="article-box">
                        <el-skeleton :loading="true" style="height: 100%" animated>
                            <template #template>
                                <ArticleListSkeleton />
                            </template>
                        </el-skeleton>
                    </div>
                </el-card>
            </el-col>
        </template>
        <template v-else>
            <div>
                11555
            </div>
        </template>
    </el-row>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
    .article-box {
        display: flex;
        justify-content: space-around;
        flex-direction: column !important;
        align-items: center;
        height: 20rem;
    }

    .article-cover {
        width: 100%;
        height: 14rem;
        overflow: hidden;
    }

    .article-info {
        flex: 1;
        width: 100%;
        padding: 1rem 1.5rem;
        overflow: hidden;
        display: inline-block;
    }
}

// pc
@media screen and (min-width: 768px) {
    .article-box {
        display: flex;
        align-items: center;
        height: 12rem;
    }

    .article-cover {
        width: 40%;
        height: 100%;
        overflow: hidden;
    }

    .article-info {
        width: 55%;
        padding: 0 20px;
        overflow: hidden;
        display: inline-block;
    }
}
</style>