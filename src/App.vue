<script setup lang="ts">
  import bot from '@/components/AIBot/bot.vue'
</script>

<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view>

    <bot />
  </div>
</template>

<style lang="scss">
  .app {
    width: 100%;
    box-sizing: border-box;
  }
</style>
