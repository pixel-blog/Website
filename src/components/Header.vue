<script>
import {RouterLink} from "vue-router";

export default {
  name: "Header"
}
</script>

<template>
<header>
  <RouterLink to="/">
    <img src="../assets/logo.svg" alt="Logo">
  </RouterLink>
  <h1>Pixel Blog</h1>
</header>
</template>

<style scoped>
header {
  height: 4rem;
  padding: .5rem;
  background-color: var(--color-background);
  display: flex;
  gap: 10px;
}

a, img {
  height: 100%;
}
</style>