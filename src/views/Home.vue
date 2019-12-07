<template>
  <div class="home">
    <div class="mainPhotoBar">
      <router-link to="/people">
        <img class="mainHomeItem" :src="people[0].img" :alt="people[0].id" >
      </router-link>
      <router-link to="/nature">
        <img class="mainHomeItem" :src="nature[0].img" :alt="nature[0].id">
      </router-link>
      <router-link to="/events">
        <img class="mainHomeItem" :src="events[0].img" :alt="events[0].id">
      </router-link>
    </div>

    <div id="quote">
      <h1>"Photography takes an instant out of time,</h1>
      <h1> altering life by holding it still."</h1>
      <p>- Dorothea Lange</p>
    </div>

    <div class="mainPhotoBar">
      <router-link to="/people">
        <img class="mainHomeItem" :src="people[1].img" :alt="people[1].id" >
      </router-link>
      <router-link to="/nature">
        <img class="mainHomeItem" :src="nature[1].img" :alt="nature[1].id">
      </router-link>
      <router-link to="/events">
        <img class="mainHomeItem" :src="events[1].img" :alt="events[1].id">
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'home',
  computed: mapGetters(['people', 'nature', 'events'])
}
</script>

<style scoped>
  .mainPhotoBar{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 25px;
    padding-bottom: 25px;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
  }
  .mainHomeItem{
    height: 25vh;
    width: auto;
    background-size: cover;
    margin: 20px;
    border-radius: 5%;
    transition: all .3s ease-in-out;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .mainHomeItem:hover{
    transform: scale(1.15);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
</style>
