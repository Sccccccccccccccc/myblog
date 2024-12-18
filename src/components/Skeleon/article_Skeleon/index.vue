<template>
    <div class="flex" style="width: 100%; height: 100%;">
        <el-skeleton-item variant="image" style="width: 30%; height: 100%;" />
        <div class="flex flex-col justify-between " style="flex: 1;">
            <div class="flex flex-col gap-2">
                <el-skeleton-item variant="text" style="margin-left: 0.3rem; width: 50%; height: 20px;" />
                <el-skeleton-item variant="text" style="margin-left: 0.3rem; width: 30%; height: 20px;" />
            </div>
            <div class="flex flex-col gap-3">
                <el-skeleton-item variant="text" style="margin-left: 0.3rem; width: 80%; height: 25px;" />
                <el-skeleton-item variant="text" style="margin-left: 0.3rem; width: 40%; height: 25px;" />
                <el-skeleton-item variant="text" style="margin-left: 0.3rem; width: 65%; height: 30px;" />
            </div>
        </div>
    </div>
</template>