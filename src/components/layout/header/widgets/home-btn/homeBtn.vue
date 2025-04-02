<script lang="ts" setup>
    const toHome = () => {
        window.history.back()
    }

</script>

<template>
    <div style="cursor: pointer;" @click.stop="toHome">
        home
    </div>
</template>