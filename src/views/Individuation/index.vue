<template>
  <Back />
  <div class="individuation">
    <div class="title">
      <span>训练强度</span>
      <img src="@/images/色块.png" alt="" />
    </div>
    <div class="content">
      <div v-for="(item, i) in list" :key="i" class="item">
        <div class="left">
          <img :src="item.img" alt="" />
        </div>
        <div class="right">
          <span>{{ item.name }}</span>
          <span>{{ item.num }}</span>
          <img :src="item.color" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import nimg2 from '@/images/耐力提升/跪姿左侧转体2.gif';
import limg1 from '@/images/力量保持/点地右侧单腿硬拉.gif';
import limg2 from '@/images/力量保持/点地左侧单腿硬拉.gif';
import zimg3 from '@/images/增强肌肉力量/单腿两头起7.gif';
import color1 from '@/images/中间绿.png';
import color2 from '@/images/左绿.png';
import color3 from '@/images/红.png';
const list = ref([
  {
    img: zimg3,
    name: '单腿两头起',
    num: '20s',
    color: color1,
  },
  {
    img: limg1,
    name: '点地右侧单腿硬拉',
    num: '20次',
    color: color3,
  },
  {
    img: limg2,
    name: '点地左侧单腿硬拉',
    num: '30s',
    color: color2,
  },
  {
    img: nimg2,
    name: '跪姿左侧转体',
    num: '14次',
    color: color1,
  },
]);
</script>

<style lang="scss" scoped>
.individuation {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fbd1db;
  padding: 40px;
  .title {
    font-size: 40px;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-left: 40px;
    margin-top: 50px;
    span {
      margin-right: 30px;
    }
  }
  .content {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 50px;
      .left {
        margin-right: 50px;
        width: 350px;
        height: 250px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        font-weight: bold;
        padding: 25px 0;
        max-width: 200px;
        span:nth-child(1) {
          font-size: 40px;
        }
        img {
          width: 105px;
          height: 35px;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
