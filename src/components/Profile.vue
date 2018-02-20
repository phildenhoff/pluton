<template>
  <div class="home">
    <div class="container">
      <h1>Profile</h1>
      <p class='subtitle'>You're a top score-er!</p>

      <router-link v-if="loggedIn" to="/logout" type="button" class="btn btn-danger logout">
        Log out
      </router-link>
    </div>
  </div>
</template>

<script>
import { isLoggedIn } from '../auth';

export default {
  name: 'Confirm',
  components: {
  },
  props: ['msg', 'chores_to_do'],
  data () {
    return {
      loggedIn: isLoggedIn(),
      leader: {
        name: 'Nobody',
        score: 0
      },
      ping: '',
      selected_chore: ''
    }
  },
  methods: {
    submit_chore () {
      const chore = this.selected_chore;
      console.log('User did ' + chore);
    }
  },
  mounted () {
    this.selected_chore = this.chores_to_do[0].name;
  }
}
</script>

<style scoped >

  h1 {
    font-weight: 900;
    color:#2c2c2c
  }

  p.subtitle {
      margin-top: 0;
      margin-bottom: 40px;
      color: #686868;
      font-size: 1.1em;
  }

  .section_title {
    font-size: 1.3em;
    margin-bottom: 30px;
  }

  section.claim_chore {
    margin-bottom: 15vh;
  }

</style>

