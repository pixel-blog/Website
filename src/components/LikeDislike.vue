<script>
import IconLike from "@/components/icons/IconLike.vue";
import IconDislike from "@/components/icons/IconDislike.vue";

export default {
  name: "LikeDislike",
  props: {
    likes: {
      type: Number,
      required: true
    },
    dislikes: {
      type: Number,
      required: true
    }
  },
  components: {IconDislike, IconLike}
}
</script>

<template>
<div class="likes-main">
  <span><button><IconLike /></button><span>{{likes}}</span></span>
  <span><button><IconDislike /></button><span>{{dislikes}}</span></span>
</div>
</template>

<style scoped>
.likes-main {
  display: flex;
  gap: 5px;
  margin-left: -6px;
}

.likes-main button {
  --bg-color-button: none;
  background: var(--bg-color-button);
  border: none;
  padding: 6px;
  border-radius: 50%;
}

.likes-main button:hover {
  --bg-color-button: var(--color-background-soft);
}

.likes-main button:active {
  --bg-color-button: var(--color-background-mute);
}
</style>