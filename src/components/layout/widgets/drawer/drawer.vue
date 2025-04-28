<script setup>
    
    import { usePreferenceStore } from '@/store/preference'
    const perferenceStore = usePreferenceStore()
    const setShowDrawer = () => {
        perferenceStore.isShowDrawer = false
    }

    import PixelBorder from '@/components/Border/pixelTheme/pixelBorder.vue'

</script>


<template>

    <div 
        class="drawer" 
        :style="{ transform: `translateX(${perferenceStore.isShowDrawer ? '-100%' : '0'})` }"
    >

        偏好设置
        
        <PixelBorder>
            <div>
                背景颜色
            
            </div>
        </PixelBorder>

    </div>

    <div 
        class="mask" 
        @click="setShowDrawer(false)" 
        v-if="perferenceStore.isShowDrawer"
    >
    </div>

</template>

<style lang="scss">

    // 解决滚动穿透
    // https://zhuanlan.zhihu.com/p/633096221
    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        overflow: auto;
        box-sizing: border-box;
    }

    
    .drawer {
        position: fixed;
        top: 0;
        right: -24%;
        width: 24%;
        height: 100%;
        background-color: var(--global-gradient);
        z-index: 9999;
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
        z-index: 9998;
        backdrop-filter: blur(2px); /* 添加毛玻璃效果 */
    }

</style>