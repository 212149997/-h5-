<template>
  <div class="online-competition">
    <div class="content">
      <div class="item">
        <img src="@/images/线上赛事/box1.png" alt="" />
        <div class="btn" @click="handleRun">
          <img src="@/images/线上赛事/start-run.png" alt="" />
        </div>
      </div>
      <div class="item" @click="handleApply">
        <img src="@/images/线上赛事/box2.png" alt="" />
      </div>
      <div class="item">
        <img src="@/images/线上赛事/box3.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function handleRun() {
  router.push('/start-run');
}

function handleApply() {
  router.push('/introduction-competition');
}
</script>

<style lang="scss" scoped>
.online-competition {
  width: 100%;
  height: 100%;
  background-color: #fbd1db;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  padding-bottom: unset;
  .content {
    height: 100%;
    overflow: scroll;
  }
  .item {
    margin-bottom: 50px;
    position: relative;
    img {
      object-fit: contain;
    }
    &:nth-child(1) {
      .btn {
        position: absolute;
        bottom: 15px;
        left: 40px;
      }
    }
  }
}
</style>
