<script setup>
import { ref } from 'vue';

const dummyData = [
  {
    id: 0,
    en: 'apple',
    ch: '蘋果',
  },
  {
    id: 1,
    en: 'book',
    ch: '書',
  },
  {
    id: 2,
    en: 'cat',
    ch: '貓',
  },
  {
    id: 3,
    en: 'dog',
    ch: '狗',
  },
  {
    id: 4,
    en: 'examine',
    ch: '檢查、審查',
  },
  {
    id: 5,
    en: 'cooperate',
    ch: '協力、合作',
  },
];
const id = ref(0);
//用v-for做出一堆單字卡，每頁顯示一個單字，按下按鈕後換頁
//做一個filter function 用來節約效能 想先別用v-show了
const ansButton = ref(true);
const words = ref([]);

function importWord() {
  words.value.splice(0, 0, ...dummyData);
}
importWord();
//點按鈕之後id++、將ansButton改成false、如果id到達words的長度則跳回首頁

//got it
const gotIt = ref([]);
function gotItButton() {
  gotIt.value.push();
}
//unfamiliar
const unfamiliar = ref([]);
function unfamiliarButton() {}
//do not know
const doNotKnow = ref([]);
function doNotKnowButton() {}
</script>

<template>
  <div
    class="container-md text-white vh-100"
    v-for="word in words"
    :key="word.id"
    v-show="word.id === id"
  >
    <div
      class="text-center bg-secondary fs-2 h-100 my-auto d-flex flex-column justify-content-between"
    >
      <div class="text-center fs-2 bg-dark py-2 position-relative">
        <router-link :to="{ name: 'home' }" style="color: white">
          <i class="bi bi-chevron-left" id="arrow"></i>
        </router-link>
        {{ word.en }}
      </div>
      <div
        class="h-100"
        id="translate"
        v-show="ansButton"
        @click="ansButton = !ansButton"
      >
        點這裡看翻譯
      </div>
      <div v-show="!ansButton">{{ word.ch }}</div>
      <div class="button-group" v-show="!ansButton">
        <button
          type="button"
          class="btn btn-primary rounded-pill w-25"
          @click="
            ansButton = !ansButton;
            id++;
          "
        >
          我會了
        </button>
        <button
          type="button"
          class="btn btn-danger rounded-pill w-25"
          @click="
            ansButton = !ansButton;
            id++;
          "
        >
          不熟
        </button>
        <button
          type="button"
          class="btn btn-success rounded-pill w-25"
          @click="
            ansButton = !ansButton;
            id++;
          "
        >
          我不會
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.button-group {
  display: flex;
  justify-content: space-around;
  padding-bottom: 1rem;
}
#translate {
  display: flex;
  justify-content: center;
  align-items: center;
}
#arrow {
  position: absolute;
  top: 10px;
  left: 15px;
}
</style>
