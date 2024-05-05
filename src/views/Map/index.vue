<template>
  <div id="map"></div>
</template>

<script setup>
import { initGaoDeSDK } from '@/utils';
import { onMounted } from 'vue';

const map = ref();

onMounted(() => {
  initGaoDeSDK(() => {
    // eslint-disable-next-line no-undef
    AMapLoader.load({
      key: '0f856426f4d2dae17c00b8949e9730dc', //申请好的Web端开发者 Key，调用 load 时必填
      version: '2.0', //指定要加载的 JS API 的版本，缺省时默认为 1.4.15
    })
      .then((AMap) => {
        map.value = new AMap.Map('map');
      })
      .catch((e) => {
        console.error(e); //加载错误提示
      });
  });
});
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
