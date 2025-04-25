<script lang="ts" setup>
import Option from "@/assets/svg/pixelTheme/option.vue"; 
import { ref } from "vue";

const drawer = ref(false);

</script>


<template>
    <div @click="drawer = true" style="cursor: pointer;" class="theme">
        <Option></Option>
    </div>

    <el-drawer class="drawer" v-model="drawer" title="I am the title" :with-header="false">
        <span>Hi there!</span>
    </el-drawer>

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