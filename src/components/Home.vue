<script setup>
import { onMounted } from "@vue/runtime-core";
import { useAuthStore } from '../store/auth';

const authStore = useAuthStore();

onMounted( async ()=>{
    await authStore.getUser(); 
    console.log(authStore.userAuth)
})



</script>

<template>
    <!-- <h1>{{ authStore?.userAuth.name }}</h1>
    <h1>{{ authStore?.userAuth.email }}</h1> -->
</template>