<script setup lang="ts">
import { computed, reactive, watch, nextTick, ref } from 'vue';
import ArticleListSkeleton from '@/components/Skeleon/article_Skeleon/index.vue'
import ArticleItem from './components/article-item.vue';
import Pagination from '../Pagination/pagination.vue';

import { useHomeStore } from '@/store/home';
import router from '@/router';
const store = useHomeStore();
const loading = computed(() => store.loading);
const articleList = computed(() => store.articleList);

const emit = defineEmits(["pageChange"]);

const translateY = ref(0);
const pagination = (page: any) => {

    console.log("pagination");
    translateY.value = 20;
    setTimeout(() => {
        translateY.value = 0;
    }, 100)

    emit("pageChange", page);
};

const param = reactive({
    current: 1,
    page: 1,
    pageSizes: [5, 10, 20, 30],
    size: 5,
})

const toArticleDetail = (item: any) => {
    
    router.push({
        path: "/article",
        query: {
            id: item.id,
        }
    })

}

</script>

<template>
    <el-row>
        <template v-if="!loading">
            <el-col v-for=" (item, index) in articleList.list" :key="index" :style="{
                transform: `translateY(${translateY}px)`,
                transition: `all ${translateY ? '0s' : '0.3s'}`
            }">
                <el-card class="article-box my-2 first:mt-0">
                    <el-skeleton :loading="loading" style="height: 100%" animated>
                        <template #default>
                            <ArticleItem @click="toArticleDetail(item)" :article-data="item" :key="item.id" :index="index" />
                        </template>
                    </el-skeleton>
                </el-card>
            </el-col>
            <Pagination :current="param.current" :size="param.size" :page-sizes="param.pageSizes"
                :total="articleList.total" @pagination="pagination" />
        </template>
        <template v-else>
            <div class="w-full">
                <el-col v-for="i in 5" :key="i">
                    <el-card class="article-box my-2 first:mt-0">
                        <el-skeleton style="height: 100%" animated>
                            <template #template>
                                <ArticleListSkeleton />
                            </template>
                        </el-skeleton>
                    </el-card>
                </el-col>
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
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        margin-bottom: 10px;
        :deep(.el-card__body) {
            height: 100%;
        }
    }
}

// pc
@media screen and (min-width: 768px) {
    .article-box {
        display: flex;
        align-items: center;
        height: 12rem;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        :deep(.el-card__body) {
            height: 100%;
        }
    }

    .article-box:hover {
        transform: translateY(-2px);
        transition: all 0.2s linear;
    }
}
</style>