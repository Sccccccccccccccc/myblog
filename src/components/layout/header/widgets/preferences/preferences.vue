<script lang="ts" setup>
import Option from "@/assets/svg/pixelTheme/option.vue"; 

import { usePreferenceStore } from '@/store/preference'
const perferenceStore = usePreferenceStore()

const setShowDrawer = () => {
    perferenceStore.isShowDrawer = true
}

</script>

<template>
    <div @click="setShowDrawer()" 
        style="cursor: pointer;" 
        class="theme"
    >
        <Option></Option>
    </div>
</template>

<style lang="scss" scoped>

    .drawer {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #000000;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 600;
    }

</style>