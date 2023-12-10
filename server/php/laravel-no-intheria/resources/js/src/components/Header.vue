<script setup>

</script>

<template>
    <div class="lg:max-w-7xl px-[20px] flex justify-between items-center mx-auto mt-3 mb-10">
        <div class="lg:hidden flex items-center justify-center w-1/3">
            nav menu
        </div>
        <div class=" lg:w-auto w-1/3 justify-center flex items-center">
            image
        </div>
        <div class="hidden lg:block">
            <nav class="hidden lg:flex justify-end items-center gap-10">
                <router-link class="text-xl py-3 px-5 border-[1px] border-teal-500 rounded-xl" to="/">Home</router-link>
                <router-link class="text-xl py-3 px-5 border-[1px] border-teal-500 rounded-xl" to="/about">About</router-link>
            </nav>
        </div>
        <div class="lg:hidden w-1/3 flex items-center justify-center ">auth</div>
    </div>
</template>

<style scoped lang="scss">
    .router-view-active{
        background-color: teal;
        color: white;
    }
</style>
