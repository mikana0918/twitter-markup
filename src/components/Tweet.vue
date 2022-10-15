<script setup>
defineProps({
  userName: String,
  isAuthorized: Number,
  date: String,
  tweet: String,
  replyCount: String,
  favoriteCount: String,
  retweetCount: String,
  imgSrc: String
})
</script>

<template>
  <div class="tweet-container">
    <!-- アイコンの入る箱 -->
    <div>
      <img src="/bird.svg" class="bird" />
    </div>
    <!-- ツイートを入れる箱 -->
    <div>
      <div class="user-info">
        <div class="user-name">{{userName}}</div>
        <img v-if="isAuthorized" src="/authorize-mark.svg" class="authorize-mark">
        <div class="tweet-date">
          {{date}}
        </div>
      </div>
      <div class="tweet">
        {{tweet}}
      </div>
      <img v-if="imgSrc" :src="imgSrc" class="tweet-image" />
      <div class="action-bottun">
        <img src="/reply.svg" class="reply">
          <div class="reply-number">{{replyCount}}</div>
        <img src="/favorite.svg" class="favorite">
          <div class="favorite-number">{{favoriteCount}}</div>
        <img src="/retweet.svg" class="retweet">
        <div class="retweet-number">{{retweetCount}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tweet-container{
  display:flex;
  min-height:113px;
  padding:12px 16px;
  border-bottom:solid 1px gray;
}
.tweet-image {
  width: 400px;
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