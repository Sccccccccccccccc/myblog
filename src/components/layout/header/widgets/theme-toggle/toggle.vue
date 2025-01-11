<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Moon, Sunrise } from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";

import { useThemeSwitchStore } from '@/store/themeSwitch'
import { local } from '@/utils/storage';

const themeSwitchStore = useThemeSwitchStore()
const { mainTheme } = storeToRefs(themeSwitchStore);
const currentTheme = ref(undefined)

onMounted(() => {
    const theme = local.get("mainTheme");
    // 若存在缓存用缓存
    if (theme) {
        const currentTh = mainTheme.value ? "dark" : "light";
        if (theme !== currentTh) {
            changeSwitch()
        }
    } else {
        const now = new Date().getHours();
        console.log("现在是：" + now);
        if (now >= 6 && now <= 18) {
            // 如果是白天，就要从黑夜切换为白天
            if (mainTheme.value) {
                changeSwitch();
            }
        } else {
            if (!mainTheme.value) {
                changeSwitch();
            }
        }
    }
    currentTheme.value = mainTheme.value;

})

const changeSwitch = () => {
    themeSwitchStore.switchMainTheme()
};

</script>

<template>
    <el-switch v-model="currentTheme" size="default" :active-icon="Sunrise" inline-prompt :inactive-icon="Moon"
        @change="changeSwitch" />
</template>