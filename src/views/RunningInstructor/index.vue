<template>
  <div class="running-instructor">
    <div class="nav">
      <span v-for="(item, i) in state" :key="i" :class="activeNav === i && 'active'" @click="activeNav = i">{{ item.navTitle }}</span>
    </div>
    <div class="content">
      <div v-for="(item, i) in list" :key="i" class="item">
        <img :src="item.img" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import nimg1 from '@/images/耐力提升/跪姿右侧转体1.gif';
import nimg2 from '@/images/耐力提升/跪姿左侧转体2.gif';
import nimg3 from '@/images/耐力提升/支撑交替摸肩3.gif';
import nimg4 from '@/images/耐力提升/支撑侧提膝4.gif';
import limg1 from '@/images/力量保持/点地右侧单腿硬拉.gif';
import limg2 from '@/images/力量保持/点地左侧单腿硬拉.gif';
import limg3 from '@/images/力量保持/早安式保持深蹲.gif';
import limg4 from '@/images/力量保持/直腿踢踵.gif';
import zimg1 from '@/images/增强肌肉力量/平板支撑交替抬手5.gif';
import zimg2 from '@/images/增强肌肉力量/平板支撑交替抬腿6.gif';
import zimg3 from '@/images/增强肌肉力量/单腿两头起7.gif';
import zimg4 from '@/images/增强肌肉力量/相扑深蹲8.gif';
import { computed } from 'vue';

const activeNav = ref(0);
const state = ref([
  {
    navTitle: '耐力提升',
    content: [
      {
        img: nimg1,
        name: '跪姿右侧转体',
      },
      {
        img: nimg2,
        name: '跪姿左侧转体',
      },
      {
        img: nimg3,
        name: '支撑交替摸肩',
      },
      {
        img: nimg4,
        name: '支撑侧提膝',
      },
    ],
  },
  {
    navTitle: '力量保持',
    content: [
      {
        img: limg1,
        name: '点地右侧单腿硬拉',
      },
      {
        img: limg2,
        name: '点地左侧单腿硬拉',
      },
      {
        img: limg3,
        name: '早安式保持深蹲',
      },
      {
        img: limg4,
        name: '直腿踢踵',
      },
    ],
  },
  {
    navTitle: '增强肌肉力量',
    content: [
      {
        img: zimg1,
        name: '平板支撑交替抬手',
      },
      {
        img: zimg2,
        name: '平板支撑交替抬腿',
      },
      {
        img: zimg3,
        name: '单腿两头起',
      },
      {
        img: zimg4,
        name: '相扑深蹲',
      },
    ],
  },
]);
const list = computed(() => {
  return state.value[activeNav.value].content;
});
</script>

<style lang="scss" scoped>
.running-instructor {
  width: 100%;
  height: 100%;
  background-color: #fbd1db;
  display: flex;
  .nav {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
    span {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba($color: #fff, $alpha: 0.6);
      white-space: nowrap;
    }
    .active {
      color: #000;
    }
  }
  .content {
    flex: 8;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      img {
        width: 400px;
        height: 358px;
        object-fit: contain;
      }
      span {
        font-weight: bold;
        position: absolute;
        bottom: 20px;
      }
    }
  }
}
</style>
