<script>
import BlogArticle from "@/components/BlogArticle.vue";
import BlogComments from "@/components/BlogComments.vue";
import RecentPosts from "@/components/RecentPosts.vue";
import {Routes} from "@/util/routes.js";

export default {
  name: "Blog",
  created() {
    this.$watch(
        () => this.$route.params,
        () => {
          this.fetchData()
        },
        { immediate: true }
    )
  },
  methods: {
    fetchData() {
      fetch(Routes.getPost(this.$route.params.id), {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      }).then(res => res.json()).then((res) => {
        this.title = res.title;
        this.content = res.content;
        this.author = {
          name: res.author,
          avatarURL: res.author_avatar
        };
        this.likes = res.likes;
        this.dislikes = res.dislikes;
        this.postedAt = new Date(res.created);
        console.log(res);
      });
    }
  },
  data() {
    return {
      comments: [
        {
          user: {
            avatarURL: "https://picsum.photos/256",
            username: "someuser"
          },
          message: "Lorem ipsum dolor sit amet consectetur."
        },
        {
          user: {
            avatarURL: "https://picsum.photos/256",
            username: "someuser"
          },
          message: "Lorem ipsum dolor sit amet consectetur."
        },
        {
          user: {
            avatarURL: "https://picsum.photos/256",
            username: "someuser"
          },
          message: "Lorem ipsum dolor sit amet consectetur."
        }
      ],
      user: {
        avatarURL: "https://picsum.photos/256",
        username: "someuser"
      },
      title: "Lorem ipsum dolor sit amet",
      content: "",
      thumbnailURL: "https://picsum.photos/900/320",
      postedAt: new Date(),
      likes: 0,
      dislikes: 0,
      author: {
        avatarURL: "https://picsum.photos/256",
        name: "Author name"
      }
    };
  },
  components: {RecentPosts, BlogComments, BlogArticle}
}
</script>

<template>
<div class="blog-main">
  <div class="blog-content">
    <div class="blog-article">
      <BlogArticle
          :title="title"
          :thumb-src="thumbnailURL"
          :posted-at="postedAt"
          :author="author"
          :likes="likes"
          :dislikes="dislikes"
      >{{content}}</BlogArticle>
    </div>
    <div class="blog-comments">
      <BlogComments :comments="comments" :user="user" />
    </div>
  </div>
  <div class="recent-posts">
    <RecentPosts />
  </div>
</div>
</template>

<style scoped>
.blog-main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2.5rem;
}

.blog-content {
  grid-column: span 2;
}

.blog-article {
  margin-bottom: 2rem;
}
</style>