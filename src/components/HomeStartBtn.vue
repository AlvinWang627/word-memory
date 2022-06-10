<template>
  <div class="container">
    <div class="card">
      <img src="https://i.imgur.com/Vtkltjr.jpg" alt="" class="card_img" />
      <div class="card_text">
        將單字依照熟悉度快速分成三類
        <router-link class="start-btn" :to="{ name: 'test-word' }"
          ><div class="start-btn-item" id="start-btn">開始使用</div>
        </router-link>
      </div>
    </div>
    <div class="card">
      <img src="https://i.imgur.com/Xy5jhSO.gif" alt="" class="card_img" />
      <div class="card_text">
        於Data頁面觀看單字的熟悉程度
        <router-link class="start-btn" :to="{ name: 'test-word' }"
          ><div class="start-btn-item" id="start-btn">開始使用</div>
        </router-link>
      </div>
    </div>
    <div class="card">
      <img src="https://i.imgur.com/CGuatLy.gif" alt="" class="card_img" />
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
    width: 300px;
    height: 250px;
    // object-fit: cover;
    border-radius: 10px;
    border: 2px solid #ffffff;
  }
  .card_text {
    margin-top: 5px;
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
      background-color: #238262;
    }
  }
}
.footer {
  line-height: 30px;
  text-align: center;
  background-color: $navBgColor;
}
@media screen and (min-width: 768px) {
  .card {
    display: flex;
    justify-content: center;
    img {
      width: 400px;
      height: 350px;
    }
    .card_text {
      font-size: 1.2rem;
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
@media screen and (min-width: 992px) {
  .container {
    .card {
      img {
        width: 500px;
        height: 450px;
      }
      .card_text {
        padding: 0 1.2rem;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
