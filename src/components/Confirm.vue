<template>
  <div class="home">
      <div class="container">
          <h1>Confirm Points</h1>
          <p class='subtitle'>Let's make sure those chores got done.</p>

          <p class='section_title'>Please confirm the following:</p>
          
          <section id="validate_chore">Did {{current_chore.user}} {{current_chore.chore.text_infinitive}}?</section>

          <section class="butons">
            <el-button type="success" v-on:click="accept_chore()">Yes!</el-button>
            <el-button type="danger" v-on:click="deny_chore()">No</el-button>
          </section>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  components: {
  },
  props: ['msg', 'chores_to_do'],
  data () {
    return {
      current_chore: {
        'user':'Phil',
        'chore_id':'asdsdf8asdfsdfasfhsaf',
        'chore': {
          'name':'fight_street',
          'text_simple_past':'fought to get to the other side of the street',
          'text_infinitive':'fight to get to the other side of the street'
        },
      },
      chore_queue: {}
    }
  },
  methods: {
    accept_chore() {
      const chore = this.current_chore;
      console.log("ACCEPTED: " + chore.user, chore.chore.name);
    },
    deny_chore() {
      const chore = this.current_chore;
      console.log("DENIED: " + chore.user, chore.chore.name);
    }
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

  #validate_chore {
    width:fit-content;
    min-width: 40vw;
    max-width: 70vw;
    font-size: 1.4em;
    font-family: monospace;
    padding: 16px;
    margin: auto;
    background-color:#fff;
    border: rgb(143, 207, 228) 2px solid;
    color: rgb(88, 186, 219);
    margin-bottom: 40px;
    vertical-align: middle;
    box-shadow: 0px 1em 2em -0.5em rgba(143, 207, 228, 0.8);
    border-radius: 5px;
  }

</style>

