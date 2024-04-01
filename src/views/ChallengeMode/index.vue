<template>
  <Back />
  <div class="challenge-mode">
    <div class="top">
      <div class="time">00：00：00</div>
      <div class="love">
        <img src="@/images/爱心.png" alt="" />
        <span>70次/分</span>
      </div>
      <div class="km">00.00km</div>
    </div>
    <div class="middle">
      <div class="vr">
        <img src="@/images/vr.png" alt="" />
      </div>
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
        </div>
        <div class="right" @click="handleFriend">
          <van-popover v-model:show="showPopover" placement="top">
            <div class="friend-box" :class="isAndroid && 'friend-box-android'">
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
              <span>00：30：00</span>
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
import { isAndroid } from '@/utils';

const talk = ref(false);
const showRes = ref(false);
const showPopover = ref(false);
const router = useRouter();

function handleTalk() {
  talk.value = !talk.value;
}

function handleFriend() {
  // showPopover.value = true;
}

function handleControl(key) {
  switch (key) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      showRes.value = true;
      break;
  }
}

function handleHome() {
  showRes.value = false;
  router.back();
}

function handleSmallPerson() {
  showPopover.value = false;
}
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

  .wrapper1 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 80px 100px;
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
    .vr {
      position: absolute;
      top: 15px;
      left: 25px;
      img {
        width: 36px;
        height: 29px;
        object-fit: contain;
      }
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
