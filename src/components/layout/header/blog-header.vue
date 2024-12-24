<script setup lang="ts">

import { onMounted, onBeforeUnmount, computed, reactive, } from 'vue';
import { debounce } from "@/utils/tool";
const headerState = reactive({
    drawerShow: false,
    startScrollTop: 0,
    headerClass: "",
    activeIndex: 0,
    scrollTop: 0,
});

// 顶部导航固定
const scroll = debounce(() => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const { startScrollTop } = headerState;
    headerState.scrollTop = scrollTop;
    if (scrollTop <= 50) {
        headerState.headerClass = "fixed-header";
        headerState.startScrollTop = scrollTop;
        return;
    }
    if (startScrollTop > scrollTop) {
        headerState.headerClass = "fixed-header";
    } else if (startScrollTop <= scrollTop) {
        headerState.headerClass = "hide-header";
    }
    headerState.startScrollTop = scrollTop;

    // console.log("scrollTop", scrollTop, startScrollTop);
}, 5);

onMounted(() => {
    // 页面增加滚动事件  
    window.addEventListener("scroll", scroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", scroll);
});

</script>

<template>
    <div class="header" :style="{
        background: headerState.scrollTop < 50 ? 'transparent' : 'var(--header-bg)',
    }">
        header11
    </div>
</template>

<style lang="scss" scoped>
.header {}

.fixed-header {
  animation-name: header;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
}
</style>
