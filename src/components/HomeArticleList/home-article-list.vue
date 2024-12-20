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
    <el-row style="margin: 4px; gap: 10px;">
        <el-col v-for=" (item, index) in articleList.list" :key="index">
            <div class="article-box">
                <el-skeleton :loading="loading" style="height: 100%" animated>
                    <template #template>
                        <ArticleListSkeleton />
                    </template>
                    <template #default>
                        <ArticleItem :article-data="item" />
                    </template>
                </el-skeleton>
            </div>
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
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
        border-radius: 4px;
    }
}

// pc
@media screen and (min-width: 768px) {
    .article-box {
        display: flex;
        align-items: center;
        height: 12rem;
        border-radius: 4px;
    }
}
</style>