<script setup>
    // 像素主题边框组件
    const props = defineProps({
        // 边框颜色
        borderColor: {
            type: String,
            default: '#000'
        },
        // 边框宽度
        borderWidth: {
            type: Number,
            default: 4
        },
        // 背景颜色
        bgColor: {
            type: String,
            default: 'transparent'
        },
        // 圆角大小
        radius: {
            type: Number,
            default: 0
        },
        // 内边距
        padding: {
            type: String,
            default: '12px'
        }
    })
</script>

<template>
    <div class="pixel-border" :style="{ 
        '--border-color': borderColor,
        '--border-width': `${borderWidth}px`,
        '--bg-color': bgColor,
        '--border-radius': `${radius}px`,
        '--padding': padding
    }">
        <slot></slot>
    </div>
</template>

<style scoped>
.pixel-border {
    position: relative;
    background-color: var(--bg-color);
    border-radius: var(--border-radius);
    padding: var(--padding);
    box-sizing: border-box;
    /* 像素化效果 */
    image-rendering: pixelated;
    image-rendering: crisp-edges;
}

.pixel-border::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--border-radius);
    /* 像素风格边框 */
    border: var(--border-width) solid var(--border-color);
    box-shadow: 
        inset calc(var(--border-width) / 2) calc(var(--border-width) / 2) 0 rgba(255, 255, 255, 0.3),
        inset calc(var(--border-width) / -2) calc(var(--border-width) / -2) 0 rgba(0, 0, 0, 0.3);
    pointer-events: none;
    z-index: 1;
}

/* 像素化边角 */
.pixel-border::after {
    content: "";
    position: absolute;
    top: calc(var(--border-width) * -1);
    left: calc(var(--border-width) * -1);
    right: calc(var(--border-width) * -1);
    bottom: calc(var(--border-width) * -1);
    border-radius: calc(var(--border-radius) + var(--border-width));
    background: 
        linear-gradient(45deg, transparent 45%, var(--border-color) 45%, var(--border-color) 55%, transparent 55%),
        linear-gradient(-45deg, transparent 45%, var(--border-color) 45%, var(--border-color) 55%, transparent 55%);
    background-size: calc(var(--border-width) * 2) calc(var(--border-width) * 2);
    background-position: 0 0, var(--border-width) 0;
    background-repeat: repeat;
    clip-path: polygon(
        var(--border-width) var(--border-width), 
        calc(100% - var(--border-width)) var(--border-width), 
        calc(100% - var(--border-width)) calc(100% - var(--border-width)),
        var(--border-width) calc(100% - var(--border-width)),
        var(--border-width) var(--border-width)
    );
    pointer-events: none;
    z-index: 2;
}
</style>