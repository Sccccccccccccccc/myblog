<script setup lang="ts">

import { reactive } from 'vue'
import { useHomeStore } from '@/store/home';
const store = useHomeStore();
const { getArticleList } = store;

const props = defineProps({
    total: {
        type: Number,
        default: 20
    },
    pageSize: {
        type: Number,
        default: 10
    },
    layout: {
        type: String,
        default: "prev, pager, next", //分页组件会展示的功能项
    },
    pageSizes: {
        type: Array,
        default: () => {
            return [10, 20, 50]; //指定分页展示条数
        },
    },
    current: {
        type: Number,
        default: 1, //指定跳转到多少页
    },
    size: {
        type: Number,
        default: 1, //每页展示的条数
    },
})

let page = reactive({
    size: props.size,
    current: props.current,
    pageSizes: props.pageSizes
});

const emit = defineEmits(["pagination"]);
//选择每页显示数量 Change page size
const sizeChange = (val: number) => {
    page.size = val;
    emit("pagination", page);
};
//选择某一页
const currentChange = (val: number) => {
    page.current = val;
    emit("pagination", page);
};
//上一页
const prev = (val: number) => {
    page.current = val - 1;
    let query = {
        pageNum: page.current,
        pageSize: page.size
    }
    getArticleList(query);
};
//下一页
const next = (val: number) => {
    page.current = val + 1;
    let query = {
        pageNum: page.current,
        pageSize: page.size
    }
    getArticleList(query);
};

</script>

<template>
    <div class="pagination">
        <el-pagination 
            background 
            :layout="layout" 
            :total="total" 
            :page-sizes="page.pageSizes" 
            :page-size="page.size"
            :current-page="page.current" 
            @size-change="sizeChange" 
            @current-change="currentChange" 
            @prev-click="prev"
            @next-click="next" 
        />
    </div>
</template>

<style scoped>
.pagination {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
}
</style>