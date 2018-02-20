<template>
  <div class="navbar">
    <el-menu
      :router="true"
      :default-active="$route.path"
      mode="horizontal"
      background-color="#138FE2"
      text-color="#fff"
      active-text-color="#fff">
      <el-menu-item index="/">🏠</el-menu-item>
      <el-menu-item index="/claim">🌟</el-menu-item>
      <el-menu-item index="/confirm">✓+❌</el-menu-item>
      <el-menu-item index="/profile">👤</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { isLoggedIn } from '../auth';
import axios from 'axios'

export default {
  name: 'navbar',
  data () {
    return {
      loggedIn: isLoggedIn(),
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu--horizontal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .btn {
    max-height: 50px;
    width:10vw;
    height:100%;
    border-radius: 0;
    display:flex;
    justify-content: center;
    align-items: center;
  }

  .navbar {
    margin: 0;
  }

</style>
