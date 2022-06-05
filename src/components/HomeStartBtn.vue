<template>
  <div class="container">
    <div class="card">
      <img src="https://i.imgur.com/QyuBAFu.jpg" alt="" class="card_img" />
      <div class="card_text">
        將單字依照熟悉度快速分成三類
        <router-link class="start-btn" :to="{ name: 'test-word' }"
          ><div class="start-btn-item" id="start-btn">開始使用</div>
        </router-link>
      </div>
    </div>
    <div class="card">
      <img src="https://i.imgur.com/GO326Ez.jpg" alt="" class="card_img" />
      <div class="card_text">
        於Data頁面觀看單字的熟悉程度
        <router-link class="start-btn" :to="{ name: 'test-word' }"
          ><div class="start-btn-item" id="start-btn">開始使用</div>
        </router-link>
      </div>
    </div>
    <div class="card">
      <img src="https://i.imgur.com/xmihAhr.jpg" alt="" class="card_img" />
      <div class="card_text">
        在Setting頁面對單字進行新增、移除、修改
        <router-link class="start-btn" :to="{ name: 'test-word' }"
          ><div class="start-btn-item" id="start-btn">開始使用</div>
        </router-link>
      </div>
    </div>
  </div>
  <div class="footer">Memory Word &copy;2022</div>
</template>

<style lang="scss" scoped>
.card {
  margin-bottom: 2rem;
  text-align: center;
  img {
    width: 80%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
}
.start-btn {
  display: flex;
  justify-content: center;
  &-item {
    text-align: center;
    background-color: $mainTextColor;
    padding: 20px;
    border-radius: 100px;
    color: $mainColor;
    width: 50%;
    margin-top: 1rem;
    transition: background-color 0.5s ease-out;
    &:hover {
      background-color: $borderColor;
    }
  }
}
.footer {
  line-height: 30px;
  text-align: center;
  background-color: $navBgColor;
}
@media screen and (min-width: 768px) {
  .container {
    .card {
      display: flex;
      .card_text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 5px;
      }
    }
    .card:nth-child(2) {
      flex-direction: row-reverse;
    }
  }
}
</style>
