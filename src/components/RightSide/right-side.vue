<script lang="ts" setup>

import RightSideSkeleton from '@/components/Skeleon/rightSide_Skeleon/index.vue'
import avartar from "@/assets/img/faye.png"

const props = defineProps({
    loading: {
        type: Boolean,
        default: true
    }
})

const temp = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'

</script>

<template>
    <el-row class="right-side">
        <el-col :span="24">
            <el-card class="info-card">
                <el-skeleton :loading="props.loading" animated>
                    <template #template>
                        <RightSideSkeleton />
                    </template>
                    <template #default>
                        <div class="relative">
                            <el-image style="width: 100%; height: 10rem; z-index: 0;" :src="temp" />
                            <div class="flex justify-start item-center ">
                                <el-avatar class="avatar" :src="temp"></el-avatar>
                                <span style="margin-left: 1rem;">Sc ccccccc</span>
                            </div>
                            <div style="padding:0.5rem 1rem;">
                                I've been here all alone.
                            </div>

                            <div class="w-full flex justify-around p-[1rem]">
                                <span>
                                    文章
                                </span>
                                <span>
                                    分类
                                </span>
                                <span>
                                    标签
                                </span>
                            </div>

                        </div>
                    </template>
                </el-skeleton>
            </el-card>
        </el-col>
    </el-row>
</template>


<style lang="scss" scoped>
.right-side {
    width: 100%;
    // margin: 4px;
    .info-card {
        height: 29rem;
    }
}

.avatar {
    position: relative;
    z-index: 1;
    margin-top: -2rem;
    margin-left: 1rem;
    min-width: 4rem;
    height: 4rem;
}
</style>
