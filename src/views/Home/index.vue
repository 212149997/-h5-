<template>
  <div class="home">
    <div class="home-title">
      <img src="@/images/马拉松健身.png" alt="" />
      <img src="@/images/全景游戏.png" alt="" />
    </div>
    <div class="home-btn">
      <img src="@/images/开始.png" alt="" @click="handleStart" />
    </div>
    <div class="home-music" @click="handleMusic">
      <img v-show="playMusic" src="@/images/音乐播放.png" alt="" />
      <img v-show="!playMusic" src="@/images/音乐暂停.png" alt="" />
      <audio ref="refAudio" autoplay="autoplay" loop="loop" preload="auto" :src="audio"></audio>
    </div>
  </div>
</template>

<script setup>
import audio from '@/images/music.mp3';

const router = useRouter();
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

function handleStart() {
  router.push('/login');
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: url('@/images/bg.png') no-repeat center/contain;
  background-size: 100% 100%;
  overflow: hidden;
  position: relative;
  &-title {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 14px;
    animation: moveUpDown 2s infinite;
    margin-left: 300px;
    img {
      width: 440px;
      height: 150px;
      object-fit: contain;
      &:first-child {
        margin-left: 150px;
      }
      &:last-child {
        margin-right: 100px;
      }
    }
    @keyframes moveUpDown {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
  &-btn {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    img {
      width: 200px;
      height: 150px;
      object-fit: contain;
    }
  }
  &-music {
    position: absolute;
    top: 20px;
    left: 20px;
  }
}
</style>
