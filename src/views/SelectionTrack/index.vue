<template>
  <div class="selection-mode">
    <div class="block">
      <div class="title">
        <img src="@/images/track/请选择跑道.png" alt="" />
      </div>
      <div class="content">
        <img v-for="(url, i) in imgList" :key="i" :src="url" alt="" @click="handleImg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from '@/images/track/厦门.png';
import img5 from '@/images/track/福州.png';
import img2 from '@/images/track/广州.png';
import img3 from '@/images/track/杭州.png';
import img4 from '@/images/track/六盘水.png';
import img6 from '@/images/track/深圳.png';
import img7 from '@/images/track/武汉.png';
import img8 from '@/images/track/西昌.png';
import img9 from '@/images/track/长春.png';

const imgList = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const router = useRouter();

function handleImg() {
  router.push('/challenge-mode');
}
</script>

<style lang="scss" scoped>
.selection-mode {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('@/images/跑道背景图.png') no-repeat center/contain;
  background-size: 100% 100%;
  overflow: hidden;
  padding-left: 250px;
  padding: 0 100px;
  .block {
    width: 100%;
    height: 100%;
    font-weight: bold;
    padding-bottom: unset;
    font-size: 40px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: relative;
    .title {
      position: absolute;
      top: 20px;
      img {
        width: 300px;
        height: 62px;
        object-fit: contain;
      }
    }
    .content {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      height: 100%;
      overflow-y: scroll;
      margin-top: 100px;
      z-index: 2;
      position: relative;
      img {
        width: 261px;
        height: 243px;
        object-fit: contain;
        margin-bottom: 50px;
        &:last-child {
          margin-right: auto;
        }
      }
    }
  }
}
</style>
