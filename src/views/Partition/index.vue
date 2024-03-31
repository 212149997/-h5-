<template>
  <div class="partition">
    <div class="partition-btn">
      <img src="@/images/游戏介绍.png" alt="" @click="handleBtn(0)" />
      <img src="@/images/开始体验.png" alt="" @click="handleBtn(1)" />
      <img src="@/images/个人中心.png" alt="" @click="handleBtn(2)" />
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
function handleBtn(key) {
  switch (key) {
    case 0:
      router.push('/introduction-game');
      break;
    case 1:
      router.push('/selection-mode');
      break;
    case 2:
      router.push('/my');
      break;
  }
}
</script>

<style lang="scss" scoped>
.partition {
  width: 100%;
  height: 100%;
  background: url('@/images/bg2.png') no-repeat center/contain;
  background-size: 100% 100%;
  overflow: hidden;
  &-btn {
    display: flex;
    flex-direction: column;
    margin-left: 250px;
    margin-top: 100px;
    img {
      width: 300px;
      height: 150px;
      object-fit: contain;
      margin-bottom: 20px;
      &:nth-child(2) {
        margin-left: 300px;
      }
      &:nth-child(3) {
        margin-left: 600px;
      }
    }
  }
}
</style>
