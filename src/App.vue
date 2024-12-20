<script setup lang="ts">

</script>

<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
  .app {
    width: 100%;
    box-sizing: border-box;
    background: #eee;
  }
</style>
