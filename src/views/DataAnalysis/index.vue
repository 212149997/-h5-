<template>
  <div class="data-analysis">
    <div class="title">
      <img src="@/images/数据分析标题.png" alt="" />
    </div>
    <div class="top">
      <img class="btn1" src="@/images/总跑步btn.png" alt="" @click="handleBtn(0)" />
      <img class="btn2" src="@/images/已获得奖牌.png" alt="" @click="handleBtn(1)" />
    </div>
    <div class="middle">
      <img class="btn" src="@/images/心率btn.png" alt="" @click="handleBtn(2)" />
    </div>
    <div class="bottom">
      <div class="left">
        <img src="@/images/运动状态.png" alt="" />
      </div>
      <div class="right">
        <img src="@/images/跑步能力.png" alt="" />
      </div>
    </div>
    <van-overlay :show="showTrack" :lock-scroll="false" @click="showTrack = false">
      <div class="wrapper1">
        <div class="block" @click.stop>
          <img :src="dialogImg" alt="" />
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script setup>
import img2 from '@/images/点亮奖牌.png';
import img3 from '@/images/心率图表.png';
import img1 from '@/images/跑步图表.png';

import { computed } from 'vue';

const showTrack = ref(false);
const active = ref(0);
const dialogImg = computed(() => {
  const arr = [img1, img2, img3];
  return arr[active.value];
});

function handleBtn(key) {
  active.value = key;
  showTrack.value = true;
  switch (key) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
  }
}
</script>

<style lang="scss" scoped>
.data-analysis {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: #fbd1db;
  .wrapper1 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 80px 100px;
    .block {
      width: 1px;
      height: 1px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .title {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .top,
  .middle {
    width: 900px;
    height: 240px;
    margin: 0 auto;
    background: url('@/images/bg.png') no-repeat center/contain;
    background-size: 100% 100%;
    position: relative;
  }
  .top {
    background-image: url('@/images/跑步记录.png');
    img {
      position: absolute;
      bottom: 20px;
      object-fit: contain;
    }
    .btn1 {
      left: 120px;
    }
    .btn2 {
      right: 80px;
    }
  }
  .middle {
    background-image: url('@/images/心率.png');
    .btn {
      position: absolute;
      right: 80px;
      top: 20px;
    }
  }
  .bottom {
    width: 100%;
    padding: 0 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    img {
      width: 250px;
      height: 120px;
      object-fit: contain;
    }
  }
}
</style>
