<script>
export default {
  name: "RecommendUsers",
  props: {
    recommendusername: String,
    recommendusernameid: String,
    isAuthorized: Boolean,
    imgSrc: String,
  },
};
</script>

<template>
  <div class="recommend-user">
    <img v-if="imgSrc" :src="imgSrc" />
    <div class="recommend-username">
      {{ recommendusername }}
      <div class="recommend-usernameid">@{{ recommendusernameid }}</div>
    </div>
    <img
      v-if="isAuthorized"
      src="/authorize-mark.svg"
      class="recommend-authorize-mark"
    />
    <div class="recommend-user-follow">Follow</div>
  </div>
</template>

<style scoped>
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
</style>
