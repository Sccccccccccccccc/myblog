<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false)

const showBotChat = () => {
    // 显示聊天窗口
    show.value = true
    console.log('showBotChat')
}

</script>

<template>
    <div class="bot" @click="showBotChat">
        🤖
    </div>
</template>

<style scoped>
.bot {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    background-color: gray;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 3;
    cursor: pointer;
}

</style>