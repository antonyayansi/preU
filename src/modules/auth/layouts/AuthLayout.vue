<template>
    <RouterView v-if="!is_new_device" />
    <OnBoarding v-else />
</template>

<script setup>
import useSystem from '../../../system/hooks/useSystem';
import OnBoarding from '../views/onBoarding.vue';

const {
    is_new_device
} = useSystem();


</script>