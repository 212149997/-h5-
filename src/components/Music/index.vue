<template>
  <div class="music">
    <div class="home-music" @click="handleMusic">
      <img v-show="playMusic" src="@/images/音乐播放.png" alt="" />
      <img v-show="!playMusic" src="@/images/音乐暂停.png" alt="" />
      <audio ref="refAudio" loop="loop" preload="auto" :src="audio"></audio>
    </div>
  </div>
</template>

<script setup>
import audio from '@/images/music.mp3';
const refAudio = ref(null);
const playMusic = ref(false);

function handleMusic() {
  if (playMusic.value) {
    refAudio.value.pause();
  } else {
    refAudio.value.play();
  }
  playMusic.value = !playMusic.value;
}
</script>

<style lang="scss" scoped>
.music {
  position: fixed;
  top: 15px;
  right: 15px;
}
</style>
