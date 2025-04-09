<script lang="ts" setup>
    import router from '@/router';
    import homeIcon from "@/assets/svg/pixelTheme/home.vue"

    const toHome = () => {
        router.push({
        path: "/home",
    })
    }

</script>

<template>
    <div style="cursor: pointer;" @click.stop="toHome">
        <homeIcon></homeIcon>
    </div>
</template>