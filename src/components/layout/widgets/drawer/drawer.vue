<script setup>

    import { ref } from 'vue'
    
    // TODO 差一个存储抽屉状态的地方
    const props = defineProps({
        isShow: {
            type: Boolean,
            default: true
        },
        position: {
            type: String,
            default: 'right'
        },

    })

</script>


<template>

    <div class="drawer" v-if="isShow"
    >
        手写抽屉
    </div>

    <div class="mask"></div>

</template>

<style lang="scss" scoped>
    
    .drawer {
        position: fixed;
        top: 0;
        right: -20%;
        width: 20%;
        height: 100%;
        background-color: #fff;
        z-index: 999;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
    }

    .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 998;
    }

</style>