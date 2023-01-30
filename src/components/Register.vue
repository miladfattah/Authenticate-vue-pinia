<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth';

const registerStore = useAuthStore();
const form = ref({
    name : '' , 
    email  : '' , 
    password : '', 
    password_confirmed : ''
});

</script>

<template>
        <div id="authentication-modal" class="w-full h-full p-4 flex justify-center items-center">
        <div class=" w-full h-full max-w-md md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h3>
                    <form @submit.prevent="registerStore.registerHandler(form)" class="space-y-6" action="#">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                            <input v-model="form.name" type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Lucky" >
                            <div class="flex" v-if="registerStore.errors.name">
                                <span class="text-red-400">{{ registerStore.errors.name[0] }}</span>
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                            <input v-model="form.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" >
                            <div class="flex" v-if="registerStore.errors.email">
                                <span class="text-red-400">{{ registerStore.errors.email[0] }}</span>
                            </div>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input v-model="form.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" >
                            <div class="flex" v-if="registerStore.errors.password">
                                <span class="text-red-400">{{ registerStore.errors.password[0] }}</span>
                            </div>
                        </div>
                        <div>
                            <label for="password_confirmed" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password Confirmed</label>
                            <input v-model="form.password_confirmed" type="password" name="password_confirmed" id="password_confirmed" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" >
                            <div class="flex" v-if="registerStore.errors.password_confirmation">
                                <span class="text-red-400">{{ registerStore.errors.password_confirmation[0] }}</span>
                            </div>
                        </div>
                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Sign in? <router-link :to="{name : 'login'}" class="text-blue-700 hover:underline dark:text-blue-500">Login account</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> 
</template>