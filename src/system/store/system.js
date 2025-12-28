import { defineStore } from "pinia";

export const system = defineStore("system", {
    state: () => ({
        is_new_device: true,
        onboarding: {
            universidadId: null,
            carreraId: null,
            cursos: []
        }
    }),
    actions: {
        getInfoDevice(){
            if(localStorage.getItem('system_onboarding')){
                this.is_new_device = false;
                this.onboarding = JSON.parse(localStorage.getItem('system_onboarding'));
            }
        }
    }
});