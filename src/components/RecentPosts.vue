<script>
import BlogPost from "@/components/BlogPost.vue";
import {Routes} from "@/util/routes.js";

export default {
  name: "RecentPosts",
  mounted() {
    this.fetchPosts();
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    fetchPosts() {
      fetch(Routes.getAllPosts(1), {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      }).then(res => res.json()).then((posts) => {
        this.posts = posts.map((post) => ({
          thumbSrc: "",
          title: post.title,
          url: `./#/blog/${post.id}`
        }));
      });
    }
  },
  components: {BlogPost}
}
</script>

<template>
<div class="posts-main">
  <div class="title">
    <hr />
    <div><h2>Recent Posts</h2></div>
  </div>
  <div class="post" v-for="post in posts">
    <BlogPost :thumb-src="post.thumbSrc" :title="post.title" :url="post.url" />
  </div>
</div>
</template>

<style scoped>
h2 {
  text-align: center;
  font-size: var(--font-size);
}

.posts-main {
  background-color: var(--color-background);
  padding: 1rem;
  border-radius: 12px;
}

.title {
  --font-size: 24px;
  --title-height: calc(var(--font-size) + 18px);
  width: 100%;
  height: var(--title-height);
  position: relative;
}

.title :where(div, hr) {
  position: absolute;
  width: 100%;
  left: 0;
}

.title h2 {
  background-color: var(--color-background);
  font-weight: bold;
}

.title div {
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
}

.title hr {
  top: calc(var(--title-height) / 2);
  color: var(--color-background-soft);
}

.post {
  padding: 10px 0;
}
</style>