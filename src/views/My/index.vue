<template>
  <Back />
  <div class="my">
    <div class="my-content">
      <div class="header">
        <div class="left">
          <img class="my-icon" src="@/images/my-icon.png" alt="" />
          <img class="avatar" src="@/images/头像.png" alt="" />
          <div class="info">
            <span class="name">Inspectorrrrrr</span>
            <div>
              <div class="num-box">
                <span>关注</span>
                <span>3</span>
              </div>
              <div class="num-box">
                <span>粉丝</span>
                <span>2</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <img src="@/images/兑换商城.png" alt="" @click="handleIcon(0)" />
          <img src="@/images/设置.png" alt="" @click="handleIcon(1)" />
        </div>
      </div>
      <div class="middle">
        <div class="title">我的数据</div>
        <div class="content">
          <div class="item">
            <span>0分钟</span>
            <span>本周跑步</span>
          </div>
          <div class="item">
            <span>00.00km</span>
            <span>跑步距离</span>
          </div>
          <div class="item">
            <span>0个</span>
            <span>跑步币</span>
          </div>
          <div class="line">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="title">反馈与建议</div>
        <van-cell-group inset>
          <van-field v-model="message" rows="2" autosize type="textarea" placeholder="请输入文字..." />
        </van-cell-group>
        <div class="btn">
          <img src="@/images/提交.png" alt="" />
        </div>
      </div>
    </div>
    <van-overlay :show="showSetting" @click="showSetting = false">
      <div class="wrapper">
        <div class="block" @click.stop>
          <div class="title">基础设置</div>
          <div class="content">
            <div class="item">
              <span class="pane">画面显示</span>
              <div class="status">
                <span>设备状态</span>
                <span>流畅</span>
              </div>
              <div class="select">
                <span>分辨率</span>
                <van-radio-group v-model="checkedResolution" shape="dot">
                  <van-radio name="1">30</van-radio>
                  <van-radio name="2">60</van-radio>
                </van-radio-group>
              </div>
            </div>
            <div class="item" style="margin-top: 50px">
              <span class="pane" style="margin-bottom: 30px">下载设置</span>
              <div class="select">
                <span>自动下载资源</span>
                <van-radio-group v-model="checkeDown" shape="dot">
                  <van-radio name="1">仅WIFI</van-radio>
                  <van-radio name="2">移动网络及WIFI</van-radio>
                </van-radio-group>
              </div>
            </div>
          </div>
          <div class="logout-btn">
            <img src="@/images/退出登录.png" alt="" @click="handleLogout" />
          </div>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="showGift" @click="showGift = false">
      <div class="wrapper2">
        <div class="block" @click.stop>
          <div class="header">
            <span>礼品兑换</span>
            <div>
              <img src="@/images/money-icon.png" alt="" />
              <span>28个</span>
            </div>
          </div>
          <div class="img-box">
            <img src="@/images/维达模块.png" alt="" />
            <img src="@/images/水杯模块.png" alt="" />
            <img src="@/images/包模块.png" alt="" />
            <img src="@/images/护膝模块.png" alt="" />
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script setup>
const message = ref('');
const checkedResolution = ref('1');
const checkeDown = ref('1');
const showSetting = ref(false);
const showGift = ref(false);

const router = useRouter();

function handleIcon(key) {
  switch (key) {
    case 0:
      showGift.value = true;
      break;
    case 1:
      showSetting.value = true;
      break;
  }
}
function handleLogout() {
  router.push('/home');
}
</script>

<style lang="scss" scoped>
.my {
  width: 100%;
  height: 100%;
  padding: 30px 80px;
  background-color: #fbd1db;
  .my-content {
    overflow: scroll;
    height: 100%;
    background-color: #fbd1db;
    padding-bottom: 20px;
  }
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      .my-icon {
        width: 37px;
        height: 53px;
        margin-right: 15px;
      }
      .avatar {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        margin-right: 30px;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-weight: bold;
        .name {
          margin-bottom: 30px;
        }
        & > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .num-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          span:first-child {
            margin-bottom: 8px;
          }
        }
      }
    }
    .right {
      img {
        width: 43px;
        height: 47px;
        object-fit: contain;
        &:first-child {
          margin-right: 50px;
        }
      }
    }
  }

  .middle {
    margin-top: 30px;
    font-weight: bold;
    background-color: #faebeb;
    padding: 30px 50px;
    font-size: 40px;
    border-radius: 10px;
    .content {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > span:first-child {
          margin-bottom: 20px;
        }
        & > span:last-child {
          font-size: 20px;
          color: #c7bdbd;
        }
      }
      .line {
        display: flex;
        align-items: flex-end;
        padding-bottom: 80px;
        & > div {
          width: 3px;
          background-color: #000;
          border-radius: 99999px;
          margin-right: 50px;
        }
        @for $i from 1 to 5 {
          & > div:nth-child(#{$i}) {
            height: calc(20px + #{$i * 30}px);
          }
        }
      }
    }
  }

  .bottom {
    margin-top: 30px;
    font-weight: bold;
    background-color: #faebeb;
    padding: 30px 50px;
    padding-bottom: unset;
    font-size: 40px;
    border-radius: 10px;
    ::v-deep(.van-cell-group) {
      margin: 20px 0;
      border-radius: 50px;
      min-height: 220px;
      .van-cell {
        padding: 30px 50px;
      }
      textarea {
        font-size: 20px;
      }
    }
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 181px;
        height: 82px;
        object-fit: contain;
      }
    }
  }

  .wrapper {
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
      padding: 10px 50px;
      padding-bottom: unset;
      font-size: 40px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      position: relative;
      & > .title {
        writing-mode: vertical-rl;
        margin-right: 100px;
        font-size: 50px;
        letter-spacing: 30px;
      }
      .content {
        .item {
          display: flex;
          flex-direction: column;
          .pane {
            margin-bottom: 30px;
          }
          .status,
          .select {
            padding-left: 40px;
            font-size: 25px;
          }
          .status {
            margin-bottom: 50px;
            span:first-child {
              color: #a6a6a6;
              margin-right: 80px;
            }
            span:last-child {
              color: #43cf7c;
            }
          }
          .select {
            color: #a6a6a6;
            display: flex;
            align-items: center;
            span {
              margin-right: 80px;
              white-space: nowrap;
            }
            ::v-deep(.van-radio-group) {
              background-color: unset;
              display: flex;
              align-items: center;
              .van-radio__label {
                font-weight: bold;
                font-size: 30px;
              }
              .van-radio:first-child {
                margin-right: 60px;
              }
              .van-radio__icon {
                border-color: #000;
                margin-right: 30px;
                .van-radio__icon--dot__icon {
                  width: 100%;
                  height: 100%;
                }
              }
              .van-radio__icon--checked {
                .van-radio__icon--dot__icon {
                  background-color: #000;
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
      .logout-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        img {
          width: 238px;
          height: 73px;
          object-fit: contain;
        }
      }
    }
  }
  .wrapper2 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 80px 40px;
    .block {
      width: 100%;
      height: 100%;
      font-weight: bold;
      background-color: #faebeb;
      padding-bottom: unset;
      border-radius: 10px;
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 60px;
        padding: 10px 50px;
        margin-bottom: 30px;
        & > div {
          display: flex;
          align-items: center;
          img {
            width: 79px;
            height: 79px;
            object-fit: contain;
            margin-right: 30px;
          }
        }
      }
      .img-box {
        display: flex;
        align-items: center;
        justify-content: space-around;
        img {
          width: 277px;
          height: 428px;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
