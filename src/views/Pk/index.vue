<template>
  <div class="pk">
    <div class="content">
      <div class="left">
        <span>Inspectorrrrrr</span>
        <img src="@/images/pk1.png" alt="" />
      </div>
      <div class="line"></div>
      <div class="right">
        <span>张三</span>
        <img src="@/images/pk2.png" alt="" />
      </div>
    </div>
    <img class="btn" src="@/images/pk按钮.png" alt="" />
    <img class="home" src="@/images/回到主页面.png" alt="" @click="handleHome" />
  </div>
</template>

<script setup>
const router = useRouter();

function handleHome() {
  router.push('/partition');
}
</script>

<style lang="scss" scoped>
.pk {
  width: 100%;
  height: 100%;
  background-color: #fbd1db;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 40px;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .line {
      all: unset;
      width: 5px;
      height: 100%;
      background-color: #e48da5;
      border-radius: 3px;
      margin: 0 100px;
    }
    span {
      font-size: 50px;
      font-weight: bold;
      color: #e48da5;
    }
    img {
      width: 500px;
      height: 480px;
      object-fit: contain;
    }
  }
  .btn {
    width: 300px;
    height: 180px;
    object-fit: contain;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;
  }
  .home {
    width: 50px;
    height: 70px;
    object-fit: contain;
    position: absolute;
    right: 50px;
    bottom: 20px;
  }
}
</style>
