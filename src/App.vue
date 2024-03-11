<script setup>
import Header from "@/components/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
}
</style>
