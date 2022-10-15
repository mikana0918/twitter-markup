<script setup>
import { ref, onMounted } from "vue";
import Tweet from "./components/Tweet.vue";
import TrendsForYou from "./components/TrendsForYou.vue";
import RecommendUsers from "./components/RecommendUsers.vue";
import { tweet } from "./api/tweet";

const tweetList = ref([]);

onMounted(async () => {
  const tl = await tweet.list();

  tweetList.value = tl;

  console.log(tl);
});

const trends = [
  {
    trendsname: "ファああい",
    tweetcount: "34k",
  },
  {
    trendsname: "受付先西口",
    tweetcount: "34k",
  },
  {
    trendsname: "俺超いい匂いびっくり",
    tweetcount: "34k",
  },
  {
    trendsname: "めけーも",
    tweetcount: "34k",
  },
];

const recommends = [
  {
    recommendusername: "TheNewYorkTimes",
    recommendusernameid: "nytimes",
    isAuthorized: true,
    imgSrc: "/thenewyorktimes.svg",
  },
  {
    recommendusername: "CNN",
    recommendusernameid: "CNN",
    isAuthorized: true,
    imgSrc: "/cnn.svg",
  },
  {
    recommendusername: "Twitter",
    recommendusernameid: "twitter",
    isAuthorized: true,
    imgSrc: "/bird.svg",
  },
];
</script>

<template>
  <div id="app">
    <div class="container">
      <!-- sidebar左側のやつ！ -->
      <div class="sidebar">
        <img src="/twitter-icon.svg" class="twitter-icon" />
        <div class="menu-items">
          <img src="/home-icon.svg" class="home-icon" />
          <div>HOME</div>
        </div>
        <div class="tweet-bottun">Tweet</div>
        <div class="my-account">
          <img src="/Profile-Photo.svg" class="Profile-Photo" />
          <div class="my-username">
            ホモレモン
            <div class="my-usernameid">@homolemon</div>
          </div>
          <img src="/key-account.svg" class="key-account" />
          <div class="my-account-option">...</div>
        </div>
      </div>
      <!-- timeline -->
      <div class="timeline">
        <div class="timeline-title">Home</div>
        <div class="editor">
          <div class="editor-draft">
            <div>
              <img src="/bird.svg" class="bird" />
            </div>
            <textarea
              placeholder="What's Happening?"
              class="tweet-editor"
            ></textarea>
          </div>
          <!-- ボタン本体 -->
          <div class="editor-control">
            <div class="tweet-bottun-timeline">Tweet</div>
          </div>
        </div>
        <div class="new-tweet">
          <Tweet
            v-for="(d, idx) in tweetList"
            :key="idx"
            :user-name="d.user.name"
            :is-authorized="false"
            :date="d.created_at"
            :tweet="d.body"
            :reply-count="d.mentions_count"
            :favorite-count="d.favorites_count"
            :retweet-count="d.retweets_count"
            :img-src="d.user.icon_path"
          />
        </div>
      </div>
      <!-- trends -->
      <div class="trends">
        <div class="twitter-search">
          <img src="/search.svg" class="search-icon" />
          Search Twitter
        </div>
        <div class="trends-for-you">
          Trends For You
          <TrendsForYou
            v-for="(trend, idx) in trends"
            :key="idx"
            :trendsname="trend.trendsname"
            :tweetcount="trend.tweetcount"
          />
          <div class="showmore">Show More</div>
        </div>
        <div class="who-to-follow">
          Who To Follow
          <RecommendUsers
            v-for="(r, idx) in recommends"
            :key="idx"
            :recommendusername="r.recommendusername"
            :recommendusernameid="r.recommendusernameid"
            :isAuthorized="r.isAuthorized"
            :imgSrc="r.imgSrc"
          />
          <div class="showmore">Show More</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  /* padding: 19.75px  25.94px; */
  display: flex;
  background-color: black;
  height: 100vh;
}
.sidebar {
  background-color: black;
  width: 275px;
  height: 100vh;
  border-right: solid 1px #6e767d;
}
.timeline {
  background-color: black;
  border-right: solid 1px gray;
  color: white;
  height: 100vh;
  width: 600px;
  overflow: scroll;
}
.timeline::-webkit-scrollbar {
  display: none;
}
.timeline-title {
  margin: 5px 25.94px;
}
.tweet-editor {
  background-color: black;
  color: #6e767d;
  font-size: 18px;
  border: none;
  width: 490px;
  height: auto;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: normal;
  resize: none;
  overflow: hidden;
}
.tweet-bottun-timeline {
  /* position:absolute; */
  font-size: 5px;
  color: white;
  text-align: center;
  border: solid;
  border-color: #1d9bf0;
  background: #1d9bf0;
  border-radius: 80px;
  /* margin-left:520px; */
  padding-top: 5px;
  padding-bottom: 5px;
  width: 70px;
  margin-top: 10px;
}
.trends {
  background-color: black;
  height: 100vh;
  width: 400px;
  overflow: scroll;
  -ms-overflow-style: none;
}
.trends::-webkit-scrollbar {
  display: none;
}
.menu-items {
  display: flex;
  margin: 0 25.94px;
  color: white;
}
.home-icon {
  margin-right: 21px;
}
.twitter-icon {
  margin: 19.75px 25.94px;
}
.tweet-bottun {
  position: absolute;
  color: white;
  text-align: center;
  border: solid;
  border-color: #1d9bf0;
  background: #1d9bf0;
  border-radius: 80px;
  margin-left: 25px;
  margin-top: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 225px;
}
.editor-draft {
  display: flex;
}
.editor {
  padding: 12px 16px;
  border-top: solid 1px gray;
  border-bottom: solid 1px gray;
}
.editor-control {
  display: flex;
  justify-content: flex-end;
}
.twitter-search {
  position: absolute;
  color: #6e767d;
  text-align: center;
  border: solid;
  border-color: #202327;
  background-color: #202327;
  border-radius: 80px;
  margin-left: 25px;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 320px;
}
.trends-for-you {
  color: #d9d9d9;
  border: solid;
  border-color: #202327;
  border-radius: 25px;
  margin-left: 25px;
  margin-top: 70px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  width: 320px;
  font-weight: bold;
  background-color: #202327;
}
.who-to-follow {
  color: #d9d9d9;
  border: solid;
  border-color: #202327;
  border-radius: 25px;
  margin-left: 25px;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  width: 320px;
  font-weight: bold;
  background-color: #202327;
}
.tweet-container {
  display: flex;
  min-height: 113px;
  padding: 12px 16px;
  border-bottom: solid 1px gray;
}
.bird {
  margin-right: 12px;
}
.user-info {
  display: flex;
  font-size: 15px;
}
.user-name {
  margin-right: 3.25px;
  font-weight: 700;
}
.authorize-mark {
  margin-right: 3.25px;
}
.tweet-date {
  color: gray;
}
.action-bottun {
  display: flex;
  margin-top: 20px;
  color: gray;
}
.reply {
  margin-right: 20px;
}
.reply-number {
  margin-right: 40px;
}
.favorite {
  margin-right: 20px;
}
.favorite-number {
  margin-right: 40px;
}
.retweet {
  margin-right: 20px;
}
.retweet-number {
  margin-right: 40px;
}
.showmore {
  margin-top: 20px;
  font-weight: bold;
  color: #1d9bf0;
}
.recommend-user {
  display: flex;
  margin-top: 20px;
}
.recommend-username {
  display: block;
  color: white;
  margin-left: 10px;
}
.recommend-usernameid {
  color: #6e767d;
  font-size: 15px;
}
.recommend-user-follow {
  position: absolute;
  margin-left: 10px;
  margin-left: 235px;
  border: solid 1px black;
  border-radius: 25px;
  padding: 3px 9px;
  background-color: white;
  color: black;
  font-size: 13px;
}
.recommend-authorize-mark {
  position: relative;
  margin-bottom: 22px;
}
.my-account {
  width: 251;
  height: 64;
  display: flex;
  position: absolute;
  bottom: 0;
  margin-left: 30px;
  margin-bottom: 12px;
}
.my-username {
  display: block;
  color: white;
  margin-left: 12px;
}
.my-usernameid {
  color: #6e767d;
}
.key-account {
  position: relative;
  margin-bottom: 30px;
}
.my-account-option {
  position: absolute;
  margin-left: 200px;
  margin-top: 8px;
  color: white;
}
</style>
