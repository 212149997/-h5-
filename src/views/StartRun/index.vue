<template>
  <div class="run">
    <div class="top">
      <div class="km">
        <span>{{ km.toFixed(2) }}</span>
        <span>公里</span>
      </div>
      <img src="@/images/线上赛事/address.png" alt="" @click="handleMap" />
    </div>
    <div class="middle">
      <div class="item">
        <span>{{ pace }}</span>
        <span>实时配速</span>
      </div>
      <div class="item">
        <span>{{ formatTime(time) }}</span>
        <span>用时</span>
      </div>
      <div class="item">
        <span>{{ kilocalorie.toFixed(2) }}</span>
        <span>大卡</span>
      </div>
    </div>
    <div class="bottom">
      <img src="@/images/线上赛事/begin.svg" alt="" @click="handleBtn(0)" />
      <img src="@/images/线上赛事/end.svg" alt="" @click="handleBtn(1)" />
    </div>
  </div>
  <van-overlay :show="endShow" @click="endShow = false">
    <div class="wrapper">
      <div class="block">
        <img v-if="km < 3" src="@/images/线上赛事/结束弹窗.png" alt="" />
        <img v-else src="@/images/线上赛事/finish.png" alt="" @click="$router.push('/partition')" />
      </div>
    </div>
  </van-overlay>
</template>

<script setup>
import { getRandomNumber } from '@/utils';
import { onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const timer = ref(null);
const endShow = ref(false);

const time = ref(0);
const km = ref(0);
const kilocalorie = ref(0);
const pace = ref(`0'00''`);

function handleMap() {
  router.push('/map');
}

function handleBtn(key) {
  switch (key) {
    case 0:
      if (timer.value) return;
      timer.value = setInterval(() => {
        km.value += 0.03;
        time.value += 1;
        kilocalorie.value += getRandomNumber(0.9, 1.4, false);
        pace.value = generateRunningPace();
      }, 1000);
      break;
    case 1:
      timer.value && clearInterval(timer.value);
      timer.value = null;
      endShow.value = true;
      break;
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
}

function generateRunningPace() {
  // 生成每公里的时间，范围在 5 分钟到 10 分钟之间
  let minutes = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  let seconds = Math.floor(Math.random() * 60);

  // 格式化时间，确保秒数显示为两位数
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // 构建跑步速度字符串
  let paceString = minutes + "'" + seconds + "''";

  return paceString;
}

onUnmounted(() => {
  timer.value && clearInterval(timer.value);
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .block {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 600px;
    }
  }
}
.run {
  width: 100%;
  height: 100%;
  background-color: #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 100px 40px;
  & > .top {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    .km {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-weight: bold;
      span:first-child {
        font-size: 100px;
        margin-bottom: 15px;
      }
      span:last-child {
        font-size: 30px;
      }
    }
    & > img {
      margin-left: auto;
    }
  }
  & > .middle {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 120px;
    justify-content: space-around;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      span:first-child {
        font-size: 80px;
        margin-bottom: 15px;
      }
      span:last-child {
        font-size: 30px;
      }
    }
  }
  & > .bottom {
    width: 100%;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>
