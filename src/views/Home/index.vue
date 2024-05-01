<template>
  <div class="home">
    <div class="home-title">
      <img src="@/images/马拉松健身.png" alt="" />
      <img src="@/images/全景游戏.png" alt="" />
    </div>
    <div class="home-btn">
      <img src="@/images/开始.png" alt="" @click="handleStart" />
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

function handleStart() {
  router.push('/partition');
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: url('@/images/bg.png') no-repeat center/contain;
  background-size: 100% 100%;
  overflow: hidden;
  position: relative;
  &-title {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 14px;
    animation: moveUpDown 2s infinite;
    margin-left: 300px;
    img {
      width: 600px;
      height: 300px;
      object-fit: contain;
      &:first-child {
        margin-left: 150px;
        margin-top: -40px;
      }
      &:last-child {
        margin-right: 200px;
        margin-top: -120px;
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
  &-btn {
    margin-top: -40px;
    display: flex;
    justify-content: center;
    img {
      width: 200px;
      height: 150px;
      object-fit: contain;
    }
  }
}
</style>
