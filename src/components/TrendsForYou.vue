<script setup>
defineProps({
  trendsname: string,
  tweetcount: string,
})
</script>

<template>
  <div class="trends-contents">
              <div class="trends-line1">
                <div>Trending in Japan</div>
                <div>...</div>
              </div>
              <div class="trends-line2">
                {{trendsname}}
              </div>
              <div class="trends-line3">
                {{tweetcount}} Tweets
              </div>
            </div>
</template>

<style scoped>.trends-line1{
  font-size: 13px;
  color: gray;
  display: flex;
  justify-content: space-between;
}
.trends-line2{
  font-size: 15px;
}
.trends-line3{
  font-size: 13px;
  color: gray;
}
.trends-contents{
  margin-top: 20px;
}
</style>



