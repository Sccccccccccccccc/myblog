<script lang="ts" setup>
import { onMounted, ref, nextTick } from 'vue'

import { Moon, Sunrise } from "@element-plus/icons-vue";
import sunIcon from '@/assets/svg/pixelTheme/sunIcon.vue';
import moonIcon from '@/assets/svg/pixelTheme/moonIcon.vue';

import { storeToRefs } from "pinia";

import { useThemeSwitchStore } from '@/store/themeSwitch'
import { local } from '@/utils/storage';

const themeSwitchStore = useThemeSwitchStore()
const { mainTheme, theme } = storeToRefs(themeSwitchStore);
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

const changeSwitch = (event?: MouseEvent) => {
    // 判断是否是移动端
    if (window.innerWidth <= 768) {
        themeSwitchStore.switchMainTheme()
        return
    }
    changeAnimation(event);
};

const changeAnimation = (event: MouseEvent) => {
    console.log('changeAnimation', event);

    if(!event) return
    const x = event.clientX;
    const y = event.clientY;

    const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y),
    );

    const isAppearanceTransition =
        document.startViewTransition &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isAppearanceTransition || !event) {
        async () => {
            themeSwitchStore.switchMainTheme() // 切换主题
            await nextTick();
            return;
        }
    }

    // 手机浏览器无法触发动画？
    const transition = document.startViewTransition(async () => {
        themeSwitchStore.switchMainTheme() // 切换主题
    });

    transition.ready.then(() => {
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
        ];
        // 这是一个动画效果的实现，
        // 通过改变`clipPath`属性的值来实现动画效果。
        // `document.documentElement`表示整个HTML文档的根元素。
        document.documentElement.animate(
            {
                clipPath: currentTheme.value ? [...clipPath].reverse() : clipPath,
            },
            {
                duration: 400,
                easing: 'ease-in',
                pseudoElement: currentTheme.value
                    ? '::view-transition-old(root)'
                    : '::view-transition-new(root)',
            },
        );
    });

}

</script>

<template>
    <!-- TODO 样式切换优化 -->
    <!-- <el-switch 
        style="scale: 1.2;"
        v-model="currentTheme" 
        size="default"  
        :active-icon="sunIcon" 
        inline-prompt 
        :inactive-icon="moonIcon"
        @click.stop="changeSwitch" 
    /> -->
    <div style="cursor: pointer;" @click.stop="changeSwitch" >
        <sunIcon v-if="theme" />
        <moonIcon v-else />
    </div>


</template>