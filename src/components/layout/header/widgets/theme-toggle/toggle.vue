<script lang="ts" setup>
import { ref } from 'vue'
import { Moon, Sunrise } from "@element-plus/icons-vue";

const currentTheme = ref(true)

const changeSwitch = () => {
    console.log("changeTheme");
};
</script>

<template>
    <el-switch v-model="currentTheme" size="default" :active-icon="Sunrise" inline-prompt :inactive-icon="Moon"
        @change="changeSwitch" />
</template>