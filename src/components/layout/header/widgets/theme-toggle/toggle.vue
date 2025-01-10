<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Moon, Sunrise } from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";

import { useThemeSwitchStore } from '@/store/themeSwitch'

const themeSwitchStore = useThemeSwitchStore()
const { mainTheme } = storeToRefs(themeSwitchStore);

const currentTheme = ref("")

const changeSwitch = () => {
    themeSwitchStore.switchMainTheme()
    console.log("changeTheme");
};

onMounted(() => {
    const theme = localStorage.getItem("mainTheme");
    // 若存在缓存用缓存
    if (theme) {
        const currentTheme = mainTheme.value ? "dark" : "light";
        if (currentTheme !== theme) {
            changeSwitch()
        }
    } else {
        const now = new Date().getHours();
        console.log("现在是：" + now);
        if (now >= 6 && now <= 18) {
            changeSwitch()
        } else {
            if (!mainTheme.value) {
                changeSwitch();
            }
        }
    }
    currentTheme.value = mainTheme.value;

})

</script>

<template>
    <el-switch v-model="currentTheme" size="default" :active-icon="Sunrise" inline-prompt :inactive-icon="Moon"
        @change="changeSwitch" />
</template>