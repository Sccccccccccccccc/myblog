<template>
    <div class="article-skeleon w-full h-full gap-2">
        <el-skeleton-item class="img-skeleon" variant="image" />
        <div class="flex flex-col justify-around p-5 " style="flex: 1;">
            <div class="flex flex-col gap-2">
                <el-skeleton-item variant="text" style="width: 50%; height: 20px;" />
                <el-skeleton-item variant="text" style="width: 30%; height: 20px;" />
            </div>
            <div class="flex flex-col gap-3 md:w-4/5 w-full">
                <el-skeleton-item variant="text" style="height: 60px;" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

// mobile
@media screen and (max-width: 768px){
    .img-skeleon{
        width: 100%;
        height: 45%;
        border-radius: 4px;
    }
    .article-skeleon {
        display: flex;
        flex-direction: column;
    }

}

// pc
@media screen and (min-width: 769px){
    .img-skeleon{
        width: 30%;
        height: 100%;
        border-radius: 4px;
    }
    .article-skeleon {
        display: flex;
    }

}

</style>