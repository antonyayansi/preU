<template>
  <div class="container mx-auto max-w-md flex flex-col items-center">
    <div class="p-8 flex justify-center items-center">
      <img :src="LogoSvg" class="h-8 rounded-lg" alt="Logo" />
      <h1 class="text-2xl font-bold ml-4">SandBox</h1>
    </div>
    <div class="m-8">
      <img :src="ExamSvg" class="w-full" alt="Exam Illustration" />
    </div>
    <div class="mx-auto px-4">
      <h2 class="text-xl font-semibold mb-4">Bienvenido a SandBox!</h2>
      <p class="text-zinc-600 font-light dark:text-zinc-400 mb-6">
        SandBox es una plataforma diseñada para ayudarte a practicar y mejorar tus habilidades a través de exámenes simulados. Nuestra misión es brindarte una experiencia de aprendizaje efectiva y accesible para hacer <strong class="text-primary-500">mas fácil</strong> tu ingreso a la Universidad.
      </p>
      <div class="space-y-4">
        <Button label="Comenzar" fluid />
        <Button label="Saltar" outlined fluid />
      </div>
    </div>
  </div>
</template>

<script setup>
import ExamSvg from '@/assets/svg/exam.svg'
import LogoSvg from '@/assets/svg/logos.svg'
import { Button } from 'primevue';
</script>
