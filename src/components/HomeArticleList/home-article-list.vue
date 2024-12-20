<script setup lang="ts">
import { computed, reactive } from 'vue';
import ArticleListSkeleton from '@/components/Skeleon/article_Skeleon/index.vue'
import ArticleItem from './components/article-item.vue';
import Pagination from '../Pagination/pagination.vue';

import { useHomeStore } from '@/store/home';
const store = useHomeStore();
const { articleList, setLoading } = store;

const loading = computed(() => store.loading);
setTimeout(() => {
    setLoading(false);
    console.log("articleList", articleList);
}, 2000);

const emit = defineEmits(["pageChange"]);
const pagination = (page: any) => {
    console.log("pagination");
    emit("pageChange", page);
};

const param = reactive({
    current: 1,
    page: 1,
    pageSizes: [5, 10, 20, 30],
    size: 5,
})

</script>

<template>
    <el-row style="margin: 4px;">
        <el-col v-for="i in 5" :key="i">
            <el-card>
                <div class="article-box">
                    <el-skeleton :loading="loading" style="height: 100%" animated>
                        <template #template>
                            <ArticleListSkeleton />
                        </template>
                        <template #default>
                            <ArticleItem />
                        </template>
                    </el-skeleton>
                </div>
            </el-card>
        </el-col>
        <Pagination 
            :current="param.current"
            :size="param.size"
            :page-sizes="param.pageSizes"
            :total="articleList.total"
            @pagination="pagination" 
        />
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