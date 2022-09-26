<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <div id="app">
    <div class="container">
      <!-- sidebar -->
      <div class="sidebar">
        <img src="/twitter-icon.svg" class="twitter-icon" />
        <div class="menu-items">
          <img src="/home-icon.svg" class="home-icon"/>
          <div>
            HOME
          </div>
        </div>
      </div>
      <!-- timeline -->
      <div class="timeline">

      </div>
      <!-- trends -->
      <div class="trends">

      </div>
    </div>
  </div> 

</template>

<style scoped>
.container{
 /* padding: 19.75px  25.94px; */
 display: flex;
 background-color:black;
 height:100vh;
}
.sidebar{
 background-color:black;
 width: 275px;
 height:100vh;
}
.timeline{
 background-color: aqua;
 height: 100vh;
 width: 600px;
}
.trends{
 background-color: yellow;
 height: 100vh;
 width: 360px;  
}
.menu-items{
  display: flex;
  margin:0 25.94px ;
  color:white;
}
.home-icon{
  margin-right: 21px;
}
.twitter-icon{
  margin: 19.75px  25.94px; 
}
</style>
