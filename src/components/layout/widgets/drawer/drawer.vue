<script setup>

    import { ref } from 'vue'

    const drawer = ref(true)

</script>


<template>

    <el-drawer v-model="drawer" title="I am the title" :with-header="false">
        <span>Hi there!</span>
    </el-drawer>

</template>