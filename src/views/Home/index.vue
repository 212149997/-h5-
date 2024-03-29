<template>
  <div class="home">
    <div class="home-title">
      <img src="@/images/马拉松健身.png" alt="" />
      <img src="@/images/全景游戏.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background: url('@/images/bg.png') no-repeat center/cover;
  background-position: 0 100%;
  background-size: 100% 57%;
  z-index: -1;
  position: relative;
  &-title {
    position: absolute;
    bottom: 350px;
    left: 500px;
    display: flex;
    flex-direction: column;
    img {
      width: 250px;
      height: 160px;
      &:last-child {
        margin-left: 100px;
      }
    }
  }
}
</style>
