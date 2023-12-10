<script setup lang="ts">
    import {useStore} from "vuex"
    import {computed, onMounted} from "vue";
    const store = useStore();

    onMounted(async () => {
        await store.dispatch('getPosts');
    });

    const posts = computed(()=> store.getters.allPosts);
</script>

<template>
    <div class="">
        <h1 class="text-5xl text-center my-10 font-medium">All posts</h1>
        <div class="p-5 border-[1px] border-teal-500 mb-10" v-for="post in posts" :key="post.id">
            <h3 class="text-2xl mb-5 font-bold">{{post.id}}. {{post.title}}</h3>
            <p class="">{{post.body}}</p>
        </div>
    </div>
</template>

<style scoped>

</style>
