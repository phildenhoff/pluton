<template>
  <div class="claim">
      <div class="container">
          <h1>Claim Points</h1>
          <p class='subtitle'>{{subtitle}}</p>

          <section class='claim_chore'>
          <select v-model="selected_chore" name="chore_to_claim" id="chore_select">
            <option v-for="chore in chores_to_do" v-bind:key="chore.name" v-bind:value="chore.name">{{chore.text_simple_past}}</option>
          </select>

          </section>
          
          <button type="button" class="btn btn-primary bottom" v-on:click="submit_chore()">
              Submit
          </button>
      </div>
  </div>
</template>

<script>
export default {
  name:  'Claim',
  components: {
  },
  props: ['msg', 'chores_to_do'],
  data () {
    return {
      subtitle: 'What chore did you do?',
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
    font-family: 'amaranthregular';
    font-weight: 900;
    color:#2c2c2c
  }

  p.subtitle {
      margin-top: 0;
      margin-bottom: 40px;
      color: #686868;
      font-size: 1.1em;
  }

  select {
    font-family: monospace;
    border: 0;
    position: relative;
    margin: auto;
    width: fit-content;
    min-width: 200px;
    max-width: 70vw;
    height: 80%;
    border-bottom: 0px;
    border-radius: 3px;
    font-size: 12px;
    text-align: center;
    box-shadow: 0px 1em 2em -0.5em rgba(143, 207, 228, 0.8);
    border-radius: 5px;
    background-color:rgb(143, 207, 228);
    color: white;
    transition: all 0.2s;

    appearance :none;
    -moz-appearance:none;
    -webkit-appearance:none;
    }

  select:hover {
    box-shadow: 0px 1.5em 2em -0.3em rgba(143, 207, 228, 0.6);
    background-color:rgb(159, 216, 235);
    outline: none;
  }

  select:focus {
    outline: none;
  }

  option {
    font-family: monospace;
    border: 0;
    border-bottom: 1px solid blue;
    padding: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .section_title {
    font-size: 1.3em;
    margin-bottom: 30px;
  }

  section.claim_chore {
    margin-bottom: 15vh;
  }

</style>

