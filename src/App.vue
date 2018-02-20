<template>
  <div id="app">
    <template v-if="$route.matched.length">
      <Navbar v-if="loggedIn"/>
      <router-view :chores_to_do='chores_to_do'></router-view>
    </template>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Home from './components/Home'
import { isLoggedIn } from './auth';

export default {
  name: 'app',
  components: {
    Home,
    Navbar
  },
  data () {
    return {
      loggedIn: isLoggedIn(),
      chores_to_do: [
        {
        'name':'garbage_disposal',
        'text_simple_past':'took out the garbage',
        'text_infinitive':'take out the garbage'
        },
        {
        'name':'wash_room',
        'text_simple_past':'washed my room',
        'text_infinitive':'wash their room'
        },
        {
        'name':'eat_dishes',
        'text_simple_past':'ate the dishes',
        'text_infinitive':'eat the dishes'
        },
        {
          'name':'fight_street',
          'text_simple_past':'fought to get to the other side of the street',
          'text_infinitive':'fight to get to the other side of the street'
        }],
      msg: 'Hello world!',
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },
  created () {
    setInterval(() => {
      this.msg = this.msg.substr(0, this.msg.length - 1);
    }, 1000);
  }
}
</script>

<style>
  @font-face {
      font-family: 'amaranthregular';
      src: url('../static/fonts/amaranth-regular-webfont.woff2') format('woff2'),
          url('../static/fonts/amaranth-regular-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  h1 {
    font-family: 'amaranthregular';
  }

  p {
    cursor: default;
  }

  .btn-primary {
    width: 80vw;
    background-color: #138FE2;
    color: white;
    text-transform: uppercase;
    font-family: 'Roboto';
    font-weight: 900;
    font-size: 1.5em;
    height: 2.5em;
    -webkit-transition: background-color 0.1s ease-in; 
    -moz-transition: background-color 0.1s ease-in; 
    transition: background-color 0.1s ease-in;
    border: none;
    -webkit-box-shadow: 0px 1em 2em -0.5em rgba(0, 0, 0, 0.20);
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.20);
  }
  .btn-primary:hover {
    background-color: #56ADE8;
  }
  .btn-primary:focus {
    background-color: #56ADE8;
  }
  .btn.bottom {
    position: absolute;
    left: 10vw;
    bottom: 4vh;
    margin: auto;
  }


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
