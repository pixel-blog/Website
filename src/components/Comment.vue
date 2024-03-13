<script>
import LikeDislike from "@/components/LikeDislike.vue";

export default {
  name: "Comment",
  components: {LikeDislike},
  props: {
    id: {
      type: String,
      required: true
    },
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
    },
    likes: {
      type: Number,
      required: true
    },
    dislikes: {
      type: Number,
      required: true
    }
  },
  methods: {
    onLike() {
      // TODO: Send request to add/remove like
      this.$emit("like", true);
    },
    onDislike() {
      // TODO: Send request to add/remove like
      this.$emit("dislike", true);
    }
  }
}
</script>

<template>
<div class="comment-main">
  <img :src="avatarUrl" :alt="username + ' avatar'">
  <div>
    <p>{{username}}</p>
    <p>{{message}}</p>
    <LikeDislike @like="onLike" @dislike="onDislike" :likes="likes" :dislikes="dislikes" />
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