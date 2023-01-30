import axios from 'axios' ;
import { defineStore } from 'pinia';


export const useAuthStore =  defineStore('auth' , {
    state: () => ({
        userAuth : null  , 
        userErrors : []
    }),
    getters : {
        userStatus: (state) => state.userAuth,
        errors : (state) => state.userErrors 
    },
    actions : {
        async getToken() {
            await axios.get('sanctum/csrf-cookie');
        },

        async getUser() {
            await this.getToken();
            const {data} = await axios.get('/api/user');
            this.userAuth = data ; 
        },

        async loginHandler(data) {
            this.userErrors = [];
            await this.getToken();
            try {
                await axios.post("login", {
                    email: data.email,
                    password:  data.password,
                });
                this.router.push({name : 'home'});
            } catch (error) {
                if(error.response.status === 422){
                    this.userErrors = error.response.data.errors;
                }
            }
        },

        async registerHandler(data) {
            this.getToken();
            this.userErrors = [];
            try {
                await axios.post('register' , {
                    name : data.name , 
                    email : data.email , 
                    password : data.password , 
                    password_confirmation : data.password_confirmed
                });
                this.router.push({name : 'home'})
            } catch (error) {
                if(error.response.status === 422 ){
                    this.userErrors = error.response.data.errors;
                }
            } 
            
        },

        async logoutHandler(){
            await axios.post('logout');
            this.userAuth = null ; 
        }
    }
})