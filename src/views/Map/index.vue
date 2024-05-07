<template>
  <div class="map">
    <div id="map"></div>
    <div class="banner">
      <div class="item">
        <span>{{ km.toFixed(2) }}</span>
        <span>公里</span>
      </div>
      <div class="item">
        <span>{{ formatTime(time) }}</span>
        <span>用时</span>
      </div>
      <div class="item">
        <span>{{ pace }}</span>
        <span>实时配速</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { initGaoDeSDK } from '@/utils';
import { onActivated, onMounted } from 'vue';
import { useRunStore } from '@/store/run.js';
import { storeToRefs } from 'pinia';
import { generateRunningPace, formatTime, getRandomNumber } from '@/utils';

const runStore = useRunStore(); //实例化
const { km, pace, time, kilocalorie } = storeToRefs(runStore);

const timer = ref(null);
const map = ref();

onMounted(() => {
  initGaoDeSDK(() => {
    // eslint-disable-next-line no-undef
    AMapLoader.load({
      key: '0f856426f4d2dae17c00b8949e9730dc', //申请好的Web端开发者 Key，调用 load 时必填
      version: '2.0', //指定要加载的 JS API 的版本，缺省时默认为 1.4.15
    })
      .then((AMap) => {
        // map.value = new AMap.Map('map');
        map.value = new AMap.Map('map', {
          resizeEnable: true,
          zoom: 10,
        });
        AMap.plugin('AMap.Geolocation', function () {
          const geolocation = new AMap.Geolocation({
            enableHighAccuracy: false, //是否使用高精度定位，默认:true
            timeout: 10000, //超过10秒后停止定位，默认：5s
            position: 'LB', //定位按钮的停靠位置
            offset: [20, 30], //定位按钮与设置的停靠位置的偏移量，默认：[10, 20]
            zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
          });
          map.value.addControl(geolocation);
        });
      })
      .catch((e) => {
        console.error(e); //加载错误提示
      });
  });
});

onActivated(() => {
  if (sessionStorage.getItem('runFlag') == 1) {
    timer.value = setInterval(() => {
      runStore.$patch({
        km: km.value + 0.03,
        pace: generateRunningPace(),
        time: time.value + 1,
        kilocalorie: kilocalorie.value + getRandomNumber(0.9, 1.4, false),
      });
    }, 1000);
  }
});

onDeactivated(() => {
  if (sessionStorage.getItem('runFlag') == 0) {
    return;
  }
  sessionStorage.setItem('runFlag', 1);
  clearInterval(timer.value);
  timer.value = null;
});
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
  position: relative;
  #map {
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
  }
  .banner {
    position: absolute;
    background-color: #f6f6f6;
    width: 800px;
    height: 150px;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: calc(infinity);
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span:first-child {
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 15px;
      }
      span:last-child {
        color: #94989c;
      }
    }
  }
}
</style>
