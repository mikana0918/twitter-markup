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
        <div class="tweet-bottun">
          Tweet
        </div>
      </div>
      <!-- timeline -->
      <div class="timeline">
        <div class="timeline-title">
          Home
        </div>
        <div class="tweet-editor">
           <!-- TODO: ここをinputタグに変えること -->
          What's Happening?
          <div class="tweet-bottun-timeline">
            Tweet
          </div>
        </div>
        <div class="new-tweet">
          <!-- ツイート本体 -->
          <div class="tweet-container">
            <!-- アイコンの入る箱 -->
            <div>
              <img src="/bird.svg" class="bird" />
            </div>
            <!-- ツイートを入れる箱 -->
            <div>
              <div class="user-info">
                <div class="user-name">CCO</div>
                <img src="/authorize-mark.svg" class="authorize-mark">
                <div class="tweet-date">
                  Oct 4
                </div>
              </div>
              <div class="tweet">
                ツイート
              </div>
              <div class=action-bottun>
                <img src="/reply.svg" class="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- trends -->
      <div class="trends">
        <div class="twitter-search">
          <img src="/search.svg" class="search-icon">
          Search Twitter
        </div>
        <div class="trends-for-you">
          Trends For You
        </div>
        <div class="trends-1">

        </div>
        <div class="trends-2">

        </div>
        <div class="who-to-follow">
          Who To Follow
        </div>
      </div>
    </div>
  </div> 

</template>

<style scoped>
.container{
  padding: 19.75px  25.94px;
  display: flex;
  background-color:black;
  height:100vh;
}
.sidebar{
  background-color:black;
  width: 275px;
  height:100vh;
  border-right:solid 1px #6E767D;
}
.timeline{
  background-color: black;
  border-right:solid 1px gray;
  color:white;
  height: 100vh;
  width: 600px;
}
.timeline-title{
  margin:5px  25.94px; 
}
.tweet-editor{
  color:#6E767D;
  font-size:18px;
  border-top:1px solid gray;
  border-bottom:1px solid gray;
  padding-bottom:50px;
}
.tweet-bottun-timeline{
  position:absolute;
  font-size:5px;
  color:white;
  text-align:center;
  border:solid;
  border-color:#1D9BF0;
  background:#1D9BF0;
  border-radius: 80px;
  margin-left:520px;
  padding-top:5px;
  padding-bottom:5px;
  width: 70px;
  margin-top: 10px; 
}
.trends{
  background-color: black;
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
.tweet-bottun{
  position:absolute;
  color:white;
  text-align:center;
  border:solid;
  border-color:#1D9BF0;
  background:#1D9BF0;
  border-radius: 80px;
  margin-left:25px;
  margin-top:10px;
  padding-top:15px;
  padding-bottom:15px;
  width: 225px;
}
.twitter-search{
  position:absolute;
  color:gray;
  text-align:center;
  border:solid;
  border-color:gray;
  border-radius: 80px;
  margin-left:25px;
  margin-top:10px;
  padding-top:10px;
  padding-bottom:10px;
  width: 320px;
}
.trends-for-you{
  color:white;
  border:solid;
  border-color:gray;
  border-radius: 25px;
  margin-left:25px;
  margin-top:70px;
  padding-top:10px;
  padding-bottom:200px;
  padding-left: 10px;
  width: 320px;
}
.who-to-follow{
  color:white;
  border:solid;
  border-color:gray;
  border-radius: 25px;
  margin-left:25px;
  margin-top:320px;
  padding-top:10px;
  padding-bottom:220px;
  padding-left: 10px;
  width: 320px;
}
.tweet-container{
  display:flex;
  min-height:113px;
  padding:12px 16px;
  border-bottom:solid 1px gray;
}
.bird{
  margin-right:12px;
}
.user-info{
  display:flex;
  font-size:15px;
}
.user-name{
  margin-right:3.25px;
  font-weight:700;
}
.authorize-mark{
  margin-right:3.25px;
}
.tweet-date{
  color:gray;
}
.action-bottun{

}
</style>
