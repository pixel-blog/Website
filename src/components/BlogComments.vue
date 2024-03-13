<script lang="ts">
import {PropType} from "vue";
import Comment from "@/components/Comment.vue";

interface User {
  avatarURL: string;
  username: string;
}

interface Comment {
  id: string;
  user: User;
  message: string;
  likes: number;
  dislikes: number;

  onLike(add: boolean): void;

  onDislike(add: boolean): void;
}

export default {
  name: "BlogComments",
  components: {Comment},
  data() {
    return {
      comment: ""
    };
  },
  methods: {
    postComment() {
      void 0;
    }
  },
  props: {
    comments: {
      type: Array as PropType<Comment[]>,
      required: true,
      validator(value: Comment[]) {
        return value.every((val) => {
          const isObject = (value) => typeof value === "object" &&
              !Array.isArray(value) &&
              value !== null;
          return isObject(val) &&
              isObject(val.user) &&
              "avatarURL" in val.user &&
              "username" in val.user &&
              "message" in val &&
              "likes" in val &&
              "dislikes" in val
        });
      }
    },
    user: {
      type: Object as PropType<User>,
      required: true,
      validator(value: User) {
        return !!(value.avatarURL && value.username);
      }
    }
  }
}
</script>

<template>
  <div class="comments-main">
    <h2>{{ comments.length }} Comments</h2>
    <div class="comment post-comment">
      <img :src="user.avatarURL" :alt="user.username + ' avatar'">
      <form @submit="postComment">
        <input type="text" v-model="comment" placeholder="Add a comment...">
        <input type="submit" value="Comment">
      </form>
    </div>
    <div class="comment" v-for="comment in comments">
      <Comment @like="comment.onLike" @dislike="comment.onDislike" :id="comment.id" :likes="comment.likes"
               :dislikes="comment.dislikes" :avatar-url="comment.user.avatarURL"
               :username="comment.user.username" :message="comment.message"/>
    </div>
  </div>
</template>

<style scoped>
.comments-main {
  background-color: var(--color-background);
  padding: 1rem;
  border-radius: 12px;
}

.comment {
  margin: 1rem 0;
}

.post-comment {
  display: flex;
  gap: 10px;
}

.post-comment img {
  width: 64px;
  height: 64px;
}

.post-comment form {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
}

.post-comment input[type=text] {
  border: none;
  width: 100%;
  border-bottom: 1px solid;
  border-color: var(--vt-c-text-light-2);
  font-size: 20px;
}

.post-comment input[type=text]:where(:focus, :focus-visible) {
  outline: none;
}

h2 {
  font-weight: bold;
  font-size: 24px;
}
</style>