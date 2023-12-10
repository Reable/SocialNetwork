<script setup>

</script>

<template>
    <div class="max-w-[1200px] container border-2 px-12 mx-auto header h-[90px] flex justify-between items-center">
        <div class="">
            image
        </div>
        <div class="flex justify-right items-center">
            <router-link class="text-xl items-center flex justify-center w-[150px] h-[50px] rounded-2xl" to="/">Home</router-link>
            <router-link class="text-xl items-center flex justify-center w-[150px] h-[50px] rounded-2xl" to="/about">About</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .router-view-active{
        background-color: #36abaf;
    }
</style>
