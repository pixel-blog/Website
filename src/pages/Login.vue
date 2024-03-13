<script>
import {Routes} from "@/util/routes.js";

export default {
  name: "Login",
  data() {
    return {
      identity: "",
      password: ""
    };
  },
  methods: {
    async login() {
      const requestBody = JSON.stringify({
        identity: this.identity,
        password: this.password
      });
      const response = await fetch(Routes.loginAccount(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: requestBody,
      });
    }
  }
}
</script>

<template>
  <div class="login-main">
    <form @submit="login">
      <h2>Login</h2>
      <div class="mb-3">
        <input v-model="identity" type="text" placeholder="Enter your username or email" aria-label="Username or Email">
      </div>
      <div class="mb-3">
        <input v-model="password" type="password" placeholder="Enter your password" aria-label="Password">
      </div>
      <input type="submit" value="Login">
    </form>
  </div>
</template>

<style scoped>
.login-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  background-color: var(--color-background);
  width: 50rem;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 1rem;
}

input {
  font-size: 24px;
  background-color: var(--color-background-mute);
  border-radius: 12px;
  padding: 3px 6px;
}

input:not([type=submit]) {
  width: 100%;
}

input[type=submit] {
  align-self: end;
  min-width: 10rem;
}

.mb-3 {
  margin-bottom: 1.5rem;
}
</style>