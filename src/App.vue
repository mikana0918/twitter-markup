<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Tweet from "./components/Tweet.vue"

const data = [
  {
    userName: "CCO",
    isAuthorized: true,
    date: "Oct 4",
    tweet: "この世は所詮、弱肉強食・・・青紫、貴様は弱いのだ！",
    replyCount: "22.4k",
    favoriteCount: "785.4k",
    retweetCount: "3.3M",
  },
  {
    userName: "CCO",
    isAuthorized: true,
    date: "Oct 4",
    tweet: "この世は所詮、弱肉強食・・・青紫、貴様は弱いのだ！",
    replyCount: "22.4k",
    favoriteCount: "785.4k",
    retweetCount: "3.3M",
  },
  {
    userName: "CCO",
    isAuthorized: true,
    date: "Oct 4",
    tweet: "この世は所詮、弱肉強食・・・青紫、貴様は弱いのだ！",
    replyCount: "22.4k",
    favoriteCount: "785.4k",
    retweetCount: "3.3M",
  },
  {
    userName: "CCO",
    isAuthorized: true,
    date: "Oct 4",
    tweet: "この世は所詮、弱肉強食・・・青紫、貴様は弱いのだ！",
    replyCount: "22.4k",
    favoriteCount: "785.4k",
    retweetCount: "3.3M",
  },
  {
    userName: "AOC",
    isAuthorized: true,
    date: "Oct 4",
    tweet: "支店を板に吊るしてギリギリ太るカレーセット！俺はちなみに今晩は豚バラ野菜炒めを作ったンゴ。",
    replyCount: "22.4k",
    favoriteCount: "785.4k",
    retweetCount: "3.3M",
    imgSrc: "/curry.jpeg"
  },
]
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
        <div class="editor">
          <div class="editor-draft">
            <div>
                <img src="/bird.svg" class="bird" />
            </div>
            <textarea placeholder="What's Happening?" class="tweet-editor"></textarea>
          </div>    
          <!-- ボタン本体 -->
          <div class="editor-control">
            <div class="tweet-bottun-timeline">
              Tweet
            </div>
          </div>
        </div>  
        <div class="new-tweet">
          <Tweet 
            v-for="(d, idx) in data"
            :key="idx"
            :user-name="d.userName" 
            :is-authorized="d.isAuthorized" 
            :date="d.date" 
            :tweet="d.tweet" 
            :reply-count="d.replyCount"
            :favorite-count="d.favoriteCount"
            :retweet-count="d.retweetCount"
            :img-src="d.imgSrc"
          />
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
  overflow: scroll;
}
.timeline-title{
  margin:5px  25.94px; 
}
.tweet-editor{
  background-color: black;
  color:#6E767D;
  font-size:18px;
  border: none;
  width:490px;
  height: auto;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: normal;
  resize: none;
  overflow: hidden
}
.tweet-bottun-timeline{
  /* position:absolute; */
  font-size:5px;
  color:white;
  text-align:center;
  border:solid;
  border-color:#1D9BF0;
  background:#1D9BF0;
  border-radius: 80px;
  /* margin-left:520px; */
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
.editor-draft{
  display: flex;
}
.editor{
  padding:12px 16px;
}
.editor-control{
  display: flex;
  justify-content: flex-end;
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
  margin-top:15px;
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
  display:flex;
  margin-top: 20px;
  color: gray;
}
.reply{
  margin-right: 20px;
}
.reply-number{
  margin-right: 40px;
}
.favorite{
  margin-right: 20px;
}
.favorite-number{
  margin-right: 40px;
}
.retweet{
  margin-right: 20px;
}
.retweet-number{
  margin-right: 40px;
}
</style>
