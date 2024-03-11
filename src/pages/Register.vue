<script>
export default {
  name: "Register",
  methods: {
    register() {
      void 0;
    }
  }
}
</script>

<template>
<div class="register-main">
  <form @submit="register">
    <h2>Register</h2>
    <div class="mb-3">
      <input type="text" placeholder="Enter your username" aria-label="Username">
    </div>
    <div class="mb-3">
      <input type="text" placeholder="Enter your name" aria-label="Name">
    </div>
    <div class="mb-3">
      <input type="email" placeholder="Enter your email" aria-label="Email">
    </div>
    <div class="mb-3 input-group">
      <input type="password" placeholder="Enter your password" aria-label="Password">
      <input type="password" placeholder="Confirm your password" aria-label="Confirm Password">
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