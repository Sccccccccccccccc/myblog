<script lang="ts" setup>
    // import route from "@/router";
    // console.log("main?", route);

    import Drawer from '../widgets/drawer/drawer.vue';
    
</script>

<template>
    <div class="main_box">
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.fullPath"></component>
            </keep-alive>
            <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.fullPath"></component>
        </router-view>

        <Drawer></Drawer>
        
    </div>
</template>