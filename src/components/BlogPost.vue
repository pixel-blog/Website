<script>
export default {
  name: "BlogPost",
  props: {
    thumbSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
<div>
  <a :href="url">
    <img :src="thumbSrc" alt="Thumb">
    <h3>{{title}}</h3>
  </a>
</div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: var(--color-text);
}

img {
  width: 100%;
  height: 15rem;
}

h3 {
  text-align: center;
  font-size: 24px;
  line-height: initial;
  font-weight: bold;
}
</style>