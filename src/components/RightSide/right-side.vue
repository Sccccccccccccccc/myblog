<script lang="ts" setup>

    import RightSideSkeleton from '@/components/Skeleon/rightSide_Skeleon/index.vue'

</script>

<template>
    <el-row class="right-side">
        <el-col :span="24">
            <el-card class="info-card">
                <el-skeleton :loading="true" animated>
                    <template #template>
                        <RightSideSkeleton />
                    </template>
                    <template #default>
                        RightSideTop
                        <!-- <RightSideTop :configDetail="true" /> -->
                    </template>
                </el-skeleton>
            </el-card>
        </el-col>
    </el-row>
</template>


<style lang="scss" scoped>
.right-side {
    width: 100%;
    margin: 4px;
    .info-card {
        height: 29rem;
    }

}
</style>
