<script setup lang="ts">

import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import gsap from "gsap"; // gsap动画库 https://note.bingkele.cc/gsap/start
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { debounce } from "@/utils/tool";
import TypeWriter from "../TypeWriter/type-writer.vue";

import { useRoute } from "vue-router";
const route = useRoute();

const showScrollBottom = ref(true);

const scrollListener = debounce(() => {
  console.log("scrolling...");
  if (document.documentElement.scrollTop > 50) {
    showScrollBottom.value = false;
  } else {
    showScrollBottom.value = true;
  }
}, 50);

const initScrollEvent = () => {
  console.log("initScrollEvent");

  window.addEventListener("scroll", scrollListener);
};

onMounted(() => {
  // console.log("onMounted called");
  initScrollEvent();
})

const props = withDefaults(
  defineProps<{ src?: string, title?: string}>(), {
  src: "http://img.mrzym.top/FvmVKfygxBKoJbFVXJwzjgAASL9S",
  title: "title",
})

const typeList = ref(["生活原本沉闷，但跑起来就会有风!", "11555"]);

console.log("route", route);

</script>

<template>
  <template v-if="route.name == 'article'">
    <div class="flex items-center justify-center !w-[100vw] !h-[30vh] relative">
      <el-image class="bg !w-[100%] !h-[100%]" fit="cover" :src=props.src>
      </el-image>
      <div class="title">
        {{ props.title }}
      </div>
    </div>
  </template>

  <template v-else>
    <div id="home">
      <el-image class="bg !w-[100%] !h-[100%]" fit="cover" :src=props.src>
      </el-image>
      <div class="font">
        <div class="flex items-center !w-[100%] !h-[1.2rem] !z-[9999]">
          <TypeWriter size="1.2rem" :typeList="typeList"></TypeWriter>
        </div>
      </div>
    </div>
  </template>

</template>

<style lang="scss" scoped>

.title {
  position: absolute;
  top: 45%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  font-size: clamp(1em, 4vmin, 20em);
  color: var(--global-white);
  padding: 0.5rem;
  white-space: nowrap;
  mix-blend-mode: overlay;
  cursor: pointer;
}

.font {
  position: absolute;
  top: 45%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  font-size: clamp(1em, 4vmin, 20em);
  color: var(--global-white);
  padding: 0.5rem;
  cursor: pointer;
}

.font:hover {
  animation: anime 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) alternate forwards;
}

#home {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: var(--home-bg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  .bg {
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: var(--home-mask-color);
  }

  .scroll-bottom {
    position: absolute;
    cursor: pointer;
    bottom: 70px;
    left: 50%;
    color: var(--menu-color);
    transform: translate(-50%, -50%);
    z-index: 1000;

    .icon-arrowdown {
      display: inline-block;
      font-size: 1.5em;
      animation: bounce 2s infinite;
    }
  }
}

@keyframes anime {
  from {
    font-variation-settings:
      "wght" 300,
      "slnt" 15;
    text-shadow: none;
  }

  to {
    font-variation-settings:
      "wght" 800,
      "slnt" 0;
    text-shadow:
      1px 1px 0px #00e6e6,
      2px 2px 0px #01cccc,
      5px 5px 5px #dda121;
  }
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(20px);
    opacity: 0.4;
  }

  50% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
