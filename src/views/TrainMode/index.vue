<template>
  <div class="train-mode">
    <div class="title">
      <img src="@/images/train-title.png" alt="" />
    </div>
    <div class="content">
      <div>
        <img src="@/images/train1.png" alt="" @click="handleBtn(0)" />
        <img src="@/images/train2.png" alt="" @click="handleBtn(1)" />
      </div>
      <img src="@/images/train3.png" alt="" @click="handleBtn(2)" />
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

function handleBtn(key) {
  switch (key) {
    case 0:
      router.push('/running-instructor');
      break;
    case 1:
      router.push('/food-match');
      break;
    case 2:
      router.push('/individuation');
      break;
  }
}
</script>

<style lang="scss" scoped>
.train-mode {
  width: 100%;
  height: 100%;
  background: url('@/images/训练模式背景.png') no-repeat center/contain;
  background-size: 100% 100%;
  overflow: hidden;
  img {
    object-fit: contain;
  }
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    & > div {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
    }
  }
}
</style>
