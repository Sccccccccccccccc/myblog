<script setup lang="ts">


</script>

<template>
    <div class="pagination">
        <el-pagination 
            background 
            layout="prev, pager, next" 
            :total="20" 
            :page-size="5"
        />
    </div>
</template>

<style scoped>

    .pagination {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }

</style>