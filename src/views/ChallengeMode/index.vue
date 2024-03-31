<template>
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
            <!-- <van-grid square clickable :border="false" column-num="3" style="width: 200px">
              <van-grid-item v-for="i in 6" :key="i" text="选项" icon="photo-o" @click="showPopover = false" />
            </van-grid> -->
            <img src="@/images/弹框.png" alt="" style="width: 200px; height: 150px" @click="showPopover = false" />
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
</script>

<style lang="scss" scoped>
.challenge-mode {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 200px;
  overflow: hidden;
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
</style>
