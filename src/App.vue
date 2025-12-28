<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
import { useDark } from '@vueuse/core';
import useSystem from './system/hooks/useSystem';

const isDark = useDark()

const {
  getInfoDevice
} = useSystem()


getInfoDevice()
</script>