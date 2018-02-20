<template>
    <div class="login">
        <h1>Welcome to Pluton</h1>

        <h2>A chore tracker for roommates.</h2>

        <h3>Please sign in</h3>

        <form v-on:submit.prevent="handleLogin">
            <!-- <p v-if="$route.query.redirect" class="error">
            You'll need to sign in to access that page.
            </p> -->
            <button type="submit" class="btn btn-primary">Log in with Auth0</button>
        </form>
    </div>
</template>

<script>
import { isLoggedIn, login, logout } from '../auth';
export default {
  name: 'login',
  methods: {
      handleLogin () {
          login()
      },
      handleLogOut () {
          logout()
      },
      isLoggedIn () {
          return isLoggedIn()
      }
  },
  data () {
      return {
          username: '',
          pass: '',
          error: false
      }
  }
}
</script>

<style scoped>
.error {
    color: rgb(196, 69, 69);
}
body {
    display: flex;
}

form {
    width: 30vw;
    margin: auto;
    margin-top: 7vh;
}

h2 {
    font-family: Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 100;
    color: #555555;
    font-style: italic; 
    margin-top: 20px;
    margin-bottom: 70px;
    font-size: 1.6em;
}

h3 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
    font-weight: 900;
}

h3 {
    color: #363636;
    font-size: 1.1em;
}

input.noLastPassStyle {
    background-image:none !important;
    background-attachment:none !important;
    padding-right:0 !important;
    border:1px solid #ABADB3 !important;
}

</style>


