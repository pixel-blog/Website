<script>
import {Routes} from "@/util/routes.js";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        // TODO replace with html alert
        return alert("Passwords do not match");
      }
      const requestBody = JSON.stringify({
        username: this.username,
        email: this.email,
        password: this.password,
        name: this.name
      });
      const response = await fetch(Routes.registerAccount(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: requestBody,
      });
      console.log(response);
    }
  }
}
</script>

<template>
<div class="register-main">
  <form @submit="register">
    <h2>Register</h2>
    <div class="mb-3">
      <input v-model="username" type="text" placeholder="Enter your username" aria-label="Username" required>
    </div>
    <div class="mb-3">
      <input v-model="name" type="text" placeholder="Enter your name" aria-label="Name" required>
    </div>
    <div class="mb-3">
      <input v-model="email" type="email" placeholder="Enter your email" aria-label="Email" required>
    </div>
    <div class="mb-3 input-group">
      <input v-model="password" type="password" placeholder="Enter your password" aria-label="Password" required>
      <input v-model="confirmPassword" type="password" placeholder="Confirm your password" aria-label="Confirm Password" required>
    </div>
    <input type="submit" value="Register">
  </form>
</div>
</template>

<style scoped>
.register-main {
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

.input-group {
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
}
</style>