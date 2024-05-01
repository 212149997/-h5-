<template>
  <div class="improve-competition-information">
    <div class="title">
      <img src="@/images/线上赛事/完善赛事信息.png" alt="" />
    </div>
    <div class="content">
      <div class="left">
        <img src="@/images/线上赛事/参赛者.png" alt="" />
        <img src="@/images/线上赛事/参赛项目.png" alt="" />
      </div>
      <div class="right">
        <img v-if="$route.query.pay" src="@/images/线上赛事/付费.png" alt="" @click="handlePay(1)" />
        <img v-else src="@/images/线上赛事/免费.png" alt="" />
        <img src="@/images/线上赛事/立即报名.png" alt="" @click="handleApply(2)" />
      </div>
    </div>
  </div>
  <van-overlay :show="show" @click="show = false">
    <div class="wrapper">
      <div class="block">
        <img v-if="flag === 1" src="@/images/线上赛事/收货地址.png" alt="" />
        <img v-if="flag === 2" src="@/images/线上赛事/报名成功.png" alt="" />
      </div>
    </div>
  </van-overlay>
</template>

<script setup>
const show = ref(false);
const flag = ref(0);

/** 立即报名 */
function handleApply(key) {
  show.value = true;
  flag.value = key;
}

/** 填写信息 */
function handlePay(key) {
  show.value = true;
  flag.value = key;
}
</script>

<style lang="scss" scoped>
.improve-competition-information {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fbd1db;
  padding: 30px 0;
  padding-left: 30px;
  position: relative;
  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 30px;
  }
  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 50px;
    .left {
      display: flex;
      flex-direction: column;
      margin-right: 50px;
      img:nth-child(1) {
        width: 605px;
        margin-bottom: 60px;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      img:nth-child(1) {
        margin-bottom: 30px;
      }
      img:nth-child(2) {
        width: 400px;
        object-fit: contain;
      }
    }
  }
}
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
  }
}
</style>
