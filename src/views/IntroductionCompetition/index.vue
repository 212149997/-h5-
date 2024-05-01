<template>
  <div class="introduction-competition">
    <div class="left">
      <img src="@/images/线上赛事/2024年生物多样性日线上跑.png" alt="" />
      <img src="@/images/线上赛事/大图.png" alt="" />
    </div>
    <div class="right">
      <div class="top">
        <img src="@/images/线上赛事/活动时间.png" alt="" />
      </div>
      <div class="bottom">
        <div>
          <img src="@/images/线上赛事/小图.png" alt="" />
        </div>
        <div>
          <img src="@/images/线上赛事/name1.png" alt="" />
          <img src="@/images/线上赛事/name2.png" alt="" />
        </div>
        <div>
          <img src="@/images/线上赛事/去报名.png" alt="" @click="handleBtn(0)" />
          <img src="@/images/线上赛事/付费报名.png" alt="" @click="handleBtn(1)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function handleBtn(key) {
  switch (key) {
    case 0:
      router.push({
        path: '/improve-competition-information',
      });
      break;
    case 1:
      router.push({
        path: '/improve-competition-information',
        query: {
          pay: 1,
        },
      });
      break;
  }
}
</script>

<style lang="scss" scoped>
.introduction-competition {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fbd1db;
  padding: 0 60px;
  padding-right: unset;
  & > .left {
    margin-right: 50px;
    img:first-child {
      margin-top: -40px;
      margin-bottom: 50px;
    }
  }
  & > .right {
    display: flex;
    flex-direction: column;
    .top {
      margin-bottom: 40px;
    }
    .bottom {
      display: flex;
      align-items: center;
      & > div {
        display: flex;
        flex-direction: column;
        &:nth-child(2n) {
          margin: 0 30px;
          margin-left: 10px;
        }
        img:first-child {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
