<template>
  <div id="app">
    <div class="logo">
      <img alt="logo" src="./assets/logo.png">
    </div>

    <div id="nav">
      <router-link to="/"><i id="home" class="fa fa-home fa-fw"></i></router-link> |
      <router-link to="/people">People</router-link> |
      <router-link to="/nature">Nature</router-link> |
      <router-link to="/events">Events</router-link> |
      <button @click="showModal">About me</button>
    </div>

    <div id="modal" v-show="this.modal">
      <div class="modalContent">
        <div class="modalTitle">
          <button @click="closeModal">Close</button>
        </div>
        <div class="modalBody">
          <About />
        </div>
      </div>
    </div>

    <router-view/>

    <footer id="footer">
      <span>&copy;</span>
      <span>Tudor Alexandru</span>
    </footer>
  </div>
</template>

<script>
  import About from './components/About'
  import {mapGetters} from 'vuex'

  export default {
    data(){
      return{
        modal: false
      }
    },
    components: {About},
    methods:{
      showModal(){
        this.modal = true;
      },
      closeModal(){
        this.modal = false;
      }
    },
    computed: mapGetters(['modalBoolean'])
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 17px;
  border-bottom: 1px solid lightgrey;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 35px;
  margin-left: 35px;
  text-decoration: none;
}

#home{
  font-size: larger;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
  #nav button{
    font-weight: bold;
    color: #2c3e50;
    margin-right: 35px;
    margin-left: 35px;
    text-decoration: none;
    border: none;
    background: none;
    font-size: 1em;
  }
  #nav button:hover{
    cursor: pointer;
  }
  #modal{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modalContent{
    background-color: white;
    width: 50%;
    position: fixed;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  .modalTitle button{
    background: none;
    border: none;
    float: right;
  }
  .modalTitle button:hover{
    cursor: pointer;
    font-weight: bolder;
  }
</style>
