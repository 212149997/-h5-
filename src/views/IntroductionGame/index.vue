<template>
  <Back />
  <div class="introduction-game">
    <p>
      《马拉松健身全景游戏》是一款注重沉浸体验和社交互动的跑步游戏应用。在全景视图中，玩家仿佛置身于真实的马拉松赛道上，路边风景和城市建筑映入眼帘，享受沉浸式的跑步体验。同时还有景点解说，在奔跑的过程中可以了解到当地的历史、文化和地理环境。社交互动功能让玩家可以与他人进行竞速比赛、分享成果，构建游戏内部的个人社交网络。游戏还提供健身数据分析功能，帮助玩家记录和分析跑步数据，制定合适的训练计划。挑战模式和实时竞速模式为玩家提供了丰富多样的游戏玩法，能够激发他们的竞争欲望和求胜心态。马拉松健身全景游戏将跑步与沉浸式体验、社交互动和多样化玩法相结合，为玩家带来了全新的跑步体验，希望吸引越来越多的玩家加入其中。
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.introduction-game {
  width: 100%;
  height: 100%;
  background: url('@/images/bg3.png') no-repeat center/contain;
  background-size: 100% 100%;
  overflow: hidden;
  p {
    padding: 190px 250px 0 200px;
    line-height: 36px;
    color: #000;
    font-weight: bold;
  }
}
</style>
