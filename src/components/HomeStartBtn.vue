<template>
  <div class="container">
    <div class="card">
      <img src="https://i.imgur.com/QyuBAFu.jpg" alt="" class="card_img" />
      <div class="card_text">將單字依照熟悉度快速分成三類</div>
    </div>
    <div class="card">
      <img src="https://i.imgur.com/GO326Ez.jpg" alt="" class="card_img" />
      <div class="card_text">於Data頁面觀看單字的記憶程度</div>
    </div>
    <div class="card">
      <img src="https://i.imgur.com/xmihAhr.jpg" alt="" class="card_img" />
      <div class="card_text">在Setting頁面對單字進行新增、移除、修改</div>
    </div>
    <router-link class="start-btn" :to="{ name: 'test-word' }"
      ><div class="start-btn-item" id="start-btn">Start memory</div>
    </router-link>
  </div>
  <div class="footer">Memory Word &copy;2022</div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.start-btn {
  display: flex;
  justify-content: center;
  &-item {
    text-align: center;
    border: 1px solid $mainTextColor;
    padding: 20px;
    border-radius: 100px;
    color: $mainColor;
    width: 50%;
    &:hover {
      color: $mainTextColor;
    }
  }
}
</style>
