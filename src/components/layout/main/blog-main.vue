<script lang="ts" setup>
    import route from "@/router";
    console.log("main?", route);
    
</script>

<template>
    <div class="main_box">
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.fullPath"></component>
            </keep-alive>
            <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.fullPath"></component>
        </router-view>
    </div>
</template>