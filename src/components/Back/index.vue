<template>
  <div class="back" @click="$router.back()">
    <img src="@/images/返回.png" alt="" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.back {
  position: fixed;
  z-index: 99999;
  top: 20px;
  left: 15px;
  img {
    object-fit: contain;
  }
}
</style>
