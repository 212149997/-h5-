<template>
  <Back v-if="$route.path !== '/home'" />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.name" />
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.name" />
  </router-view>
  <Music />
</template>

<script setup>
import Music from '@/components/Music/index.vue';
</script>

<style lang="scss" scoped></style>
