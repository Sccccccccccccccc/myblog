<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useThemeSwitchStore } from '@/store/themeSwitch'

import search from "@/assets/svg/pixelTheme/search.vue";

const themeSwitchStore = useThemeSwitchStore()
const { mainTheme } = storeToRefs(themeSwitchStore);



</script>



<template>
    <div class="search">
        <search></search>
    </div>
</template>

<style lang="scss" scoped></style>