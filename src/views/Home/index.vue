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
  width: 100%;
  height: 100%;
  background: url('@/images/bg.png') no-repeat center/contain;
  background-size: 100% 100%;
  z-index: -1;
  overflow: hidden;
  &-title {
    display: flex;
    flex-direction: column;
    margin-top: 14px;
    margin-left: 160px;
    animation: moveUpDown 2s infinite;
    img {
      width: 140px;
      height: 100px;
      &:last-child {
        margin-left: 40px;
      }
    }
    @keyframes moveUpDown {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
}
</style>
