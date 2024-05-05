<template>
  <div class="challenge-mode">
    <div class="top">
      <div class="time">{{ formattedTime }}</div>
      <div class="love">
        <img v-show="!showRes" src="@/images/爱心.png" alt="" />
        <span>{{ heartRate }}次/分</span>
      </div>
      <div class="km">{{ km.toFixed(2) }}km</div>
    </div>
    <div class="middle">
      <div class="vr">
        <img src="@/images/vr.png" alt="" />
      </div>
      <video
        v-show="!showRes"
        ref="refVideo"
        x5-playsinline
        x5-video-player-type="h5"
        webkit-playsinline
        playsinline
        poster="@/images/视频封面.png"
        src="https://video-1318398344.cos.ap-nanjing.myqcloud.com/xiamen.mp4"
        preload="auto"></video>
    </div>
    <div class="bottom">
      <div class="btn-box">
        <img src="@/images/开始2.png" alt="" @click="handleControl(0)" />
        <img src="@/images/暂停.png" alt="" @click="handleControl(1)" />
        <img src="@/images/结束.png" alt="" @click="handleControl(2)" />
      </div>
      <div class="icon-box">
        <div class="left" @click="handleTalk">
          <img v-show="talk" src="@/images/讲.png" alt="" />
          <img v-show="!talk" src="@/images/不讲.png" alt="" />
          <audio ref="refAudio" loop="loop" preload="auto" :src="audio"></audio>
        </div>
        <div class="right">
          <van-popover v-model:show="showPopover" placement="top">
            <div class="friend-box" :class="'friend-box-android'">
              <img src="@/images/弹框.png" alt="" />
              <div class="small-person">
                <img src="@/images/小人.png" alt="" @click="handleSmallPerson" />
                <img src="@/images/小人.png" alt="" @click="handleSmallPerson" />
                <img src="@/images/小人.png" alt="" @click="handleSmallPerson" />
              </div>
            </div>
            <template #reference>
              <img src="@/images/好友.png" alt="" />
            </template>
          </van-popover>
        </div>
      </div>
    </div>
    <van-overlay :show="showRes" @click="showRes = false">
      <div class="wrapper1">
        <div class="block" @click.stop>
          <div class="header">
            <div class="item">
              <span>跑步时长</span>
              <span>{{ formattedTime }}</span>
            </div>
            <div class="item">
              <span>消耗（千卡）</span>
              <span>00：30：00</span>
            </div>
            <div class="item">
              <span>配速</span>
              <span>7'300"</span>
            </div>
          </div>
          <div class="middle">
            <img class="left" src="@/images/SleekDoodle.png" alt="" />
            <div class="right">
              <div>
                <span>获得跑步币</span>
                <img src="@/images/跑步币.png" alt="" />
              </div>
              <span>15个</span>
            </div>
          </div>
          <div class="bottom">
            <div class="left">
              <img src="@/images/朋友圈.png" alt="" />
              <img src="@/images/qq.png" alt="" />
              <img src="@/images/weibo.png" alt="" />
              <img src="@/images/twitter.png" alt="" />
            </div>
            <div class="right" @click="handleHome">
              <img src="@/images/回到主页面.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
// import video from '@/images/厦门.mp4';
import audio from '@/images/厦门马拉松景点介绍.mp3';
//import { isAndroid } from '@/utils';

const refAudio = ref(null);
const formattedTime = ref('00：00：00');
const heartRate = ref(70);
const km = ref(0);
const timer = ref(null);

const refVideo = ref(null);
const talk = ref(false);
const showRes = ref(false);
const showPopover = ref(false);
const router = useRouter();

function handleTalk() {
  if (talk.value) {
    refAudio.value.pause();
  } else {
    refAudio.value.play();
  }
  talk.value = !talk.value;
}

function handleControl(key) {
  switch (key) {
    case 0:
      /* 开始 */
      refVideo.value.play();
      // 模拟心率变化
      timer.value = setInterval(() => {
        heartRate.value = generateRandomHeartRate();
        km.value += 0.03;
      }, 2000); // 每2秒更新一次心率
      break;
    case 1:
      /* 暂停 */
      refVideo.value.pause();
      timer.value && clearInterval(timer.value);
      break;
    case 2:
      /* 结束 */
      showRes.value = true;
      refVideo.value.pause(); // 暂停视频
      refAudio.value.pause(); // 暂停讲解
      // refVideo.value.currentTime = 0; // 将视频时间设置为0，即回到开头
      timer.value && clearInterval(timer.value);
      break;
  }
}

function handleHome() {
  showRes.value = false;
  router.push('/partition');
}

function handleSmallPerson() {
  showPopover.value = false;
  router.push('/pk');
}

function generateRandomHeartRate() {
  // 定义正常心率的范围
  const minHeartRate = 70; // 最低心率（60 bpm）
  const maxHeartRate = 100; // 最高心率（100 bpm）

  // 生成随机心率值
  const randomHeartRate = Math.floor(Math.random() * (maxHeartRate - minHeartRate + 1)) + minHeartRate;

  return randomHeartRate;
}
onMounted(() => {
  refVideo.value.addEventListener(
    'timeupdate',
    function () {
      // 获取视频当前时间（以秒为单位）
      const currentTimeInSeconds = Math.floor(refVideo.value.currentTime);
      // 将秒数转换为时、分、秒
      const hours = Math.floor(currentTimeInSeconds / 3600);
      const minutes = Math.floor((currentTimeInSeconds % 3600) / 60);
      const seconds = Math.floor(currentTimeInSeconds % 60);
      // 格式化时间
      formattedTime.value = `${hours.toString().padStart(2, '0')}：${minutes.toString().padStart(2, '0')}：${seconds.toString().padStart(2, '0')}`;

      if (currentTimeInSeconds >= Math.floor(refVideo.value.duration)) {
        clearInterval(timer.value);
      }
    },
    false,
  );
});

onUnmounted(() => {
  timer.value && clearInterval(timer.value);
});
</script>

<style lang="scss" scoped>
.challenge-mode {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 200px;
  overflow: hidden;
  background-color: #fbd1db;

  :deep(.van-overlay) {
    z-index: 10;
  }
  .van-overlay {
    z-index: 9999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    .wrapper1 {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 80px 100px;
      position: relative;
      z-index: 9999999;
      .block {
        width: 100%;
        height: 100%;
        font-weight: bold;
        background-color: #faebeb;
        padding: 20px 50px;
        padding-bottom: unset;
        font-size: 40px;
        border-radius: 55px;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 9999999;

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span:first-child {
              margin-bottom: 30px;
            }
          }
        }
        .middle {
          margin-top: 20px;
          display: flex;
          align-items: center;
          .left {
            width: 451px;
            height: 313px;
            object-fit: contain;
            margin-right: 30px;
          }
          .right {
            display: flex;
            flex-direction: column;
            align-items: center;
            & > div {
              display: flex;
              align-items: center;
              img {
                width: 62px;
                height: 62px;
                object-fit: contain;
                margin-left: 30px;
              }
            }
            & > span {
              margin-top: 30px;
              font-size: 70px;
            }
          }
        }
        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-top: 20px;
          .left {
            img {
              width: 75px;
              height: 60px;
              object-fit: contain;
              margin-right: 30px;
            }
          }
          .right {
            img {
              width: 95px;
              height: 80px;
              object-fit: contain;
            }
          }
        }
      }
    }
  }
  & > .top {
    display: flex;
    background-color: #faebeb;
    padding: 10px;
    font-weight: bold;
    font-size: 35px;
    border-radius: 15px;
    margin-top: 50px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    & > div {
      background-color: #fff;
      height: 50px;
      display: flex;
      align-items: center;
      border-radius: 15px;
      padding: 5px 20px;
      &:last-child {
        margin-right: unset;
      }
    }
    .love {
      img {
        width: 35px;
        height: 35px;
        object-fit: contain;
        animation: jump 1s linear infinite;
        margin-right: 20px;
        @keyframes jump {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.8);
          }
          100% {
            transform: scale(1);
          }
        }
      }
    }
  }
  & > .middle {
    width: 100%;
    flex: 1;
    background-color: #faebeb;
    border-radius: 30px;
    margin-top: 40px;
    position: relative;
    border: 6px solid #5f8cfe;
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    touch-action: none;
    .vr {
      position: absolute;
      top: 15px;
      left: 25px;
      z-index: 3;
      img {
        width: 36px;
        height: 29px;
        object-fit: contain;
      }
    }
    video {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1 !important;
    }
  }
  & > .bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    .btn-box {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: 15px;
      img {
        width: 80px;
        height: 76px;
        object-fit: contain;
      }
    }
    .icon-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 58px;
        height: 47px;
        object-fit: contain;
      }
    }
  }
}
::v-deep(.van-popover__content) {
  position: relative;
}
.friend-box {
  position: relative;
  width: 450px;
  height: 350px;
  .small-person {
    position: absolute;
    left: 150px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 110px;
    & > img {
      width: 40px;
      height: 50px;
      object-fit: contain;
      margin-bottom: 50px;
      &:nth-child(1) {
        margin-bottom: 40px;
      }
      &:nth-child(2) {
        margin-bottom: 45px;
      }
    }
  }
  & > img {
    width: 450px;
    height: 350px;
    object-fit: contain;
    position: absolute;
    left: -220px;
    bottom: -50px;
  }
}
.friend-box-android {
  position: absolute;
  width: 450px;
  height: 350px;
  transform: rotate(-270deg);
  left: -10px;
  bottom: -210px;
}
::v-deep(.van-popover__content) {
  background-color: unset;
  box-shadow: unset;
  overflow: unset;
}
</style>
