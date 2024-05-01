<template>
  <div class="partition">
    <div class="partition-btn">
      <img v-for="(item, i) in btnArr" :key="i" :src="item" alt="" @click="handleBtn(i)" />
    </div>
  </div>
</template>

<script setup>
import partitionBtn1 from '@/images/partition-btn1.png';
import partitionBtn2 from '@/images/partition-btn2.png';
import partitionBtn3 from '@/images/partition-btn3.png';
import partitionBtn4 from '@/images/partition-btn4.png';

const router = useRouter();

const btnArr = [partitionBtn1, partitionBtn2, partitionBtn3, partitionBtn4];

function handleBtn(key) {
  switch (key) {
    case 0:
      router.push('/train-mode');
      break;
    case 1:
      router.push('/selection-track');
      break;
    case 2:
      router.push('/online-competition');
      break;
    case 3:
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
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 100px 230px;
    margin-left: 350px;
    img {
      width: 300px;
      height: 150px;
      object-fit: contain;
      margin-bottom: 20px;
    }
  }
}
</style>
