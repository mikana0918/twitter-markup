<script setup>
defineProps({
  id: Number,
  userName: String,
  isAuthorized: Boolean,
  date: String,
  tweet: String,
  replyCount: Number,
  favoriteCount: Number,
  retweetCount: Number,
  imgSrc: String,
  attachment1: String,
});
</script>

<template>
  <div class="tweet-container">
    <!-- アイコンの入る箱 -->
    <div>
      <img :src="imgSrc" class="bird" />
    </div>
    <!-- ツイートを入れる箱 -->
    <div>
      <div class="user-info">
        <div class="user-name">{{ userName }}</div>
        <img
          v-if="isAuthorized"
          src="/authorize-mark.svg"
          class="authorize-mark"
        />
        <div class="tweet-date">
          {{ date }}
        </div>
      </div>
      <div class="tweet">
        {{ tweet }}
      </div>
      <!-- TODO: organize tweet photos -->
      <img v-if="attachment1" :src="attachment1" class="tweet-image" />
      <div class="action-bottun">
        <img src="/assets/reply.svg" class="reply" />
        <div class="reply-number">{{ replyCount }}</div>
        <div class="icon-container" @click="$emit(`favorite`, id)">
          <img src="/assets/favorite.svg" class="favorite" />
          <div class="favorite-number">{{ favoriteCount }}</div>
        </div>
        <img src="/assets/retweet.svg" class="retweet" />
        <div class="retweet-number">{{ retweetCount }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tweet {
  white-space: pre-line;
}
.tweet-container {
  display: flex;
  min-height: 113px;
  padding: 12px 16px;
  border-bottom: solid 1px gray;
}
.tweet-image {
  width: 400px;
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
.retweet {
  margin-right: 20px;
}
.retweet-number {
  margin-right: 40px;
}
.icon-container {
  display: flex;
  margin-right: 40px;
}
</style>
