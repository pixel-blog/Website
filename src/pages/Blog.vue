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
          this.fetchPost();
          this.fetchComments();
        },
        { immediate: true }
    )
  },
  methods: {
    fetchPost() {
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
      });
    },
    fetchComments() {
      fetch(Routes.getPostComments(this.$route.params.id), {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      }).then(res => res.json()).then((res) => {
        this.comments = res.map((comment, index) => {
          const onLike = (add) => {
            add ? comment.likes++ : comment.likes--;
            this.comments[index] = commentToCommentData();
          };

          const onDislike = (add) => {
            add ? comment.dislikes++ : comment.dislikes--;
            this.comments[index] = commentToCommentData();
          };

          function commentToCommentData() {
            return {
              id: comment.id,
              user: {
                avatarURL: comment.avatar,
                username: comment.username ? `@${comment.username}` : "Missing username"
              },
              message: comment.content,
              likes: comment.likes,
              dislikes: comment.dislikes,
              onLike,
              onDislike
            };
          }

          return commentToCommentData();
        });
      });
    }
  },
  data() {
    return {
      comments: [],
      user: {
        avatarURL: "",
        username: ""
      },
      title: "",
      content: "",
      thumbnailURL: null,
      postedAt: null,
      likes: 0,
      dislikes: 0,
      author: {
        avatarURL: "",
        name: ""
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
          @like="(add) => add ? likes++ : likes--"
          @dislike="(add) => add ? dislikes++ : dislikes--"
          :id="this.$route.params.id"
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