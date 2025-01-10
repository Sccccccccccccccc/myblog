<script setup lang="ts">

import { onMounted, onBeforeUnmount, computed, reactive, } from 'vue';
import { debounce } from "@/utils/tool";

import ThemeToggle from "./widgets/theme-toggle/toggle.vue";
import Search from "./widgets/global-search/search.vue";

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
    <div 
        :class="['header_box', headerState.headerClass]" 
        :style="{
            background: headerState.scrollTop < 50 ? 'transparent' : 'var(--header-bg)',
        }"
    >
        <div class="pc_header">

            <div class="menu-left">
                avatar
            </div>
            <div class="menu-right">
                <Search></Search>
                <ThemeToggle></ThemeToggle>
            </div>

        </div>
        <div class="mobile_header">

        </div>
    </div>
</template>

<style lang="scss" scoped>
.hide-header {
    animation-name: hideHeader;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}

.fixed-header {
    animation-name: header;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}

@keyframes header {
  0% {
    transform: translateY(-3.6rem);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes hideHeader {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-3.6rem);
  }
}

</style>
