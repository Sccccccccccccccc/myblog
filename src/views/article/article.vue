
<script lang="ts" setup>
import router from '@/router';
import { computed, onMounted } from 'vue';

import { useHomeStore } from '@/store/home';
const store = useHomeStore();
const articleDetail = computed(() => store.articleDetail[0]);

onMounted( () => {
    console.log("article mounted", articleDetail);
})

</script>

<template>
    <div>
        <div class="article">
            <h1>{{ articleDetail.article_title }}</h1>
            <div class="content" v-html="articleDetail.article_content"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.article {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    h1 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .content {
        font-size: 16px;
        line-height: 1.5;
        text-align: justify;
    }
}
</style>