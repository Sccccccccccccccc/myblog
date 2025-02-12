<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useThemeSwitchStore } from '@/store/themeSwitch'
const themeSwitchStore = useThemeSwitchStore()
const { mainTheme } = storeToRefs(themeSwitchStore);



</script>



<template>
    <div class="search">
        {{ mainTheme }}
    </div>
</template>

<style lang="scss" scoped></style>