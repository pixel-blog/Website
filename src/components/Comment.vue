<script>
import LikeDislike from "@/components/LikeDislike.vue";

export default {
  name: "Comment",
  components: {LikeDislike},
  props: {
    avatarUrl: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
<div class="comment-main">
  <img :src="avatarUrl" :alt="username + ' avatar'">
  <div>
    <p>@{{username}}</p>
    <p>{{message}}</p>
    <LikeDislike :likes="10" :dislikes="10" />
  </div>
</div>
</template>

<style scoped>
.comment-main {
  display: flex;
  gap: 10px;
  line-height: initial;
}

img {
  width: 64px;
  height: 64px;
}
</style>