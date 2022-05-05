<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
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
const ansButton = ref(true);
const words = ref([]);
const doNotKnow = ref([]);
function importWord() {
  doNotKnow.value.splice(0, 0, ...dummyData);
}
importWord();

const gotIt = ref([]);
const unfamiliar = ref([]);
let length = doNotKnow.value.length;
function gotItButton(word, event) {
  const value = event.target.innerText;
  if (value === '我會了') {
    gotIt.value.push({ id: word.id, en: word.en, ch: word.ch });
    doNotKnow.value.splice(id, 1);
  } else if (value === '不熟') {
    unfamiliar.value.push({ id: word.id, en: word.en, ch: word.ch });
    doNotKnow.value.splice(id, 1);
  }
  length--;
  id.value++;
  if (length === 0) {
    alert('words are tested');
    router.push({ name: 'homeStartBtn' });
  }
  ansButton.value = !ansButton.value;
}
</script>

<template>
  <div
    class="container-md text-white vh-100"
    v-for="word in doNotKnow"
    :key="word.id"
    v-show="word.id === id"
  >
    <div
      class="text-center bg-secondary fs-2 h-100 my-auto d-flex flex-column justify-content-between"
    >
      <div class="text-center fs-2 bg-dark py-2 position-relative">
        <router-link :to="{ name: 'homeStartBtn' }" style="color: white">
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
          @click.stop.prevent="gotItButton(word, $event)"
        >
          我會了
        </button>
        <button
          type="button"
          class="btn btn-danger rounded-pill w-25"
          @click.stop.prevent="gotItButton(word, $event)"
        >
          不熟
        </button>
        <button
          type="button"
          class="btn btn-success rounded-pill w-25"
          @click.stop.prevent="gotItButton(word, $event)"
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
