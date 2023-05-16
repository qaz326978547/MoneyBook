

<template>
  <MainNavBarComponentVue></MainNavBarComponentVue>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainNavBarComponentVue from './components/MainNavBarComponent.vue'
</script>

<style scoped></style>
