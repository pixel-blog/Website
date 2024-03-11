<script lang="ts">
import {PropType} from "vue";
import IconLike from "@/components/icons/IconLike.vue";
import IconDislike from "@/components/icons/IconDislike.vue";
import LikeDislike from "@/components/LikeDislike.vue";

interface Author {
  avatarURL: string;
  name: string;
}

export default {
  name: "BlogArticle",
  components: {LikeDislike, IconDislike, IconLike},
  data() {
    return {
      formatter: new Intl.DateTimeFormat("default", {
        month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric"
      })
    };
  },
  props: {
    thumbSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    author: {
      type: Object as PropType<Author>,
      required: true,
      validator(author: Author) {
        return !!(author.avatarURL && author.name);
      }
    },
    postedAt: {
      type: Date as PropType<Date>,
      required: true
    }
  }
}
</script>

<template>
<article>
  <img class="thumbnail" :src="thumbSrc" alt="Thumb">
  <h1>{{title}}</h1>
  <div class="author">
    <img :src="author.avatarURL" alt="">
    <div>
      <p class="author-name">{{author.name}}</p>
      <p class="posted-at">{{formatter.format(postedAt)}}</p>
      <LikeDislike />
    </div>
  </div>
  <p class="content"><slot></slot></p>
</article>
</template>

<style scoped>
article {
  background-color: var(--color-background);
  padding: 1rem;
  border-radius: 12px;
}

.thumbnail {
  width: 100%;
  max-height: 20rem;
}

h1 {
  font-size: 35px;
  font-weight: bold;
  color: var(--color-text);
}

.author {
  display: flex;
  gap: 15px;
  line-height: initial;
}

.author p {
  font-size: 14px;
}

.author img {
  width: 64px;
  height: 64px;
}

.author-name {
  font-weight: bold;
}

.posted-at {
  color: var(--vt-c-text-light-2);
}

.content {
  font-size: 16px;
}
</style>