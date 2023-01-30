<script setup>
import Nav from './components/Nav.vue';
</script>

<template>
    <main class="w-full h-screen ">
        <Nav />
        <div class="pt-40">
            <router-view></router-view>
        </div>
    </main>
</template>
