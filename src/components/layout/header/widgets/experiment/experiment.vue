<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useThemeSwitchStore } from '@/store/themeSwitch'

import experiment from "@/assets/svg/pixelTheme/experiment.vue";
const themeSwitchStore = useThemeSwitchStore()
const { mainTheme } = storeToRefs(themeSwitchStore);

</script>


<template>
    <div style="cursor: pointer;" class="experiment">
        <experiment></experiment>
    </div>
</template>

<style lang="scss" scoped></style>