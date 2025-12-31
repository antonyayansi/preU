import { defineStore } from "pinia";
import { SignJWT, jwtVerify } from 'jose';
import { baseApi } from "../../../services/baseApi";

const secret = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET);

export const auth = defineStore("auth", {
    state: () => ({
        isLoading: false,
        isAuthenticated: false,
        user: null,
        token: null,
    }),
    actions: {
        async checkJWToken(){
            const jwt = localStorage.getItem('preu-jwt');
            if (!jwt) return false
            try {
                const { payload } = await jwtVerify(jwt, secret)
                this.user = payload;
                this.isAuthenticated = true;
                return true
            } catch (e) {
                console.error("JWT verification failed:", e);
                return false;
            }
        },
        async onLogin(credentials){
            this.isLoading = true;
            try {
                const { data } = await baseApi.post("/login", credentials)
                console.log("Login response data:", data);
            }catch(e){
                console.error("Login failed:", e);
            }
        }
    }
}); 