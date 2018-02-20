<template>
  <div class="home">
    <div id='chores'>
      <h1>Recent chores</h1>
      <el-card class="chore_card" v-for="chore in recent_chores" :key="chore.id">
        <div class="clearfix">
          <p class="chorecard_user">{{chore.user_name_string}}</p>
          <p class="chorecard_string" v-on:click="expand_card(chore.id)" :class="{truncate: expanded_card !== chore.id}">{{proto_chores[chore.chore_type].text}}</p>
          <transition name="fade">
            <p class="chorecard_date" v-if="expanded_card == chore.id">posted {{chore.date_submitted_string}}</p>
          </transition>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['chores'],
  data () {
    return {
      proto_chores: {
        'fought_osprey': {
          'text':"fought off an incoming osprey attack"
        },
        'defend_nuclear': {
          'text':'defended against a nuclear attack'
        },
        'islamic_jihad': {
          'text':'started a Islamic jihad against the nasty western nations'
        }
      },
      recent_chores: [
        {
          'id':'afhsg9shkjfg77ydsifug',
          'chore_type':'fought_osprey',
          'user_name_string': 'Daniel Frankcom',
          'date_submitted_string': '7:37am, 1 February 2017'
        },
        {
          'id':'fajsdjhf9agihasf9hag',
          'chore_type':'defend_nuclear',
          'user_name_string': 'Michelle Obama',
          'date_submitted_string': '5:52PM, 1 February 2017'
        },
        {
          'id':'97eyhouihgo78oe5iegg',
          'chore_type':'islamic_jihad',
          'user_name_string': 'Usama bin al-jabr sud Hussein',
          'date_submitted_string': '7:11am, 11 September 2001'
        }
      ],
      expanded_card: '',
      expanded_card_text: 'discovered the study of mathematical symbols and the rules for manipulating these symbols; a unifying thread for all of mathematics',
      top_scores: '',

    }
  },
  methods: {
    fillData () {
      const URL = 'http://localhost:5000/api'
      axios.get(URL + '/top_scores')
      .then(res => {
        let results = res.data
        this.top_scores = results
        for (let user in res.data) {
          this.top_users[user.toLowerCase()].score = res.data[user]
        }
      })
    },
    expand_card(id) {
      if (this.expanded_card !== id) {
        this.expanded_card = id;
      } else {
        this.expanded_card = '';
      }
    }
  },
  computed: {
    expanded_card_text (id) {

    }
  }
}
</script>

<style scoped >
  div.chore_card {
    width: 90%;
    margin-left: 5%;
    font-family: 'Roboto';
    margin-bottom: 15px; 
  }
  p.chorecard_user {
    text-align: left;
    color: #138FE2;
    font-size: 1.3em;
    margin: 0;
    margin-bottom: 10px;
  }
  p.chorecard_string {
    color: #a3a3a3;
    text-align: left;
    font-size: 1.1em;
    margin: 0;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
    transition: height 0.8s ease-out;
  }
  p.chorecard_string:hover {
    color: #57695d;
  }
  p.chorecard_date {
    text-align: right;
    margin: 0;
    color: #d1d1d1;
  }
  .truncate {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-height: 1.3em;
  }

  span.lead {
      color: #2c2c2c;
      font-size: 1.1em;
  }
  .buttons {
      margin-top: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  .buttons button {
      margin: 5px;
  }

  .scores {
    width:100vw;
    padding: 0;
    list-style: none;
    background-color: #00628a;
    height: 10vh;
    min-height: 25px;
    max-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: white;
  }


  /* ANIMATIONS */
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    opacity: 0;
    transition: all 0s;
  }
  .fade-enter, .fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(5px);
    opacity: 0;
  }
   
</style>

