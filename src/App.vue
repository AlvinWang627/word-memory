<script setup>
import { ref, provide, watchEffect } from 'vue';
import { RouterView } from 'vue-router';
// import Navbar from './components/Navbar.vue';
//localStorage相關
const STORAGE_KEY_gotIt = 'memory-word-gotIt';
const STORAGE_KEY_unfamiliar = 'memory-word-unfamiliar';
const STORAGE_KEY_doNotKnow = 'memory-word-doNotKnow';

const gotIt = ref(JSON.parse(localStorage.getItem(STORAGE_KEY_gotIt) || '[]'));
const unfamiliar = ref(
  JSON.parse(localStorage.getItem(STORAGE_KEY_unfamiliar) || '[]')
);
const doNotKnow = ref(
  JSON.parse(localStorage.getItem(STORAGE_KEY_doNotKnow)) || [
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
  ]
);

watchEffect(() => {
  localStorage.setItem(STORAGE_KEY_gotIt, JSON.stringify(gotIt.value));
  localStorage.setItem(
    STORAGE_KEY_unfamiliar,
    JSON.stringify(unfamiliar.value)
  );
  localStorage.setItem(STORAGE_KEY_doNotKnow, JSON.stringify(doNotKnow.value));
});

//將emit回來的單字做分類
function pushInGotItWord(data) {
  if (gotIt.value.some((word) => word.id === data.id)) {
    return;
  } else {
    //將doNotKnow及unfamiliar中的單字刪除
    doNotKnow.value = doNotKnow.value.filter((word) => word.id !== data.id);
    unfamiliar.value = unfamiliar.value.filter((word) => word.id !== data.id);
    //將記住的單字放到gotIt中
    gotIt.value.push(data);
  }
}
function pushInUnfamiliar(data) {
  //防止unfamiliar有相同單字
  if (unfamiliar.value.some((word) => word.id === data.id)) {
    return;
  } else {
    //將doNotKnow中的單字刪除
    doNotKnow.value = doNotKnow.value.filter((word) => word.id !== data.id);
    //將記住的單字放到unfamiliar中
    unfamiliar.value.push(data);
  }
}
function pushInDoNotKnow(data) {
  //將doNotKnow中的單字刪除
  doNotKnow.value = doNotKnow.value.filter((word) => word.id !== data.id);
  //將記住的單字放到doNotKnow中
  doNotKnow.value.push(data);
}
//provide到HomeData.vue
provide('gotItWords', gotIt);
provide('unfamiliarWords', unfamiliar);
provide('doNotKnowWords', doNotKnow);
</script>

<template>
  <!-- <Navbar /> -->
  <RouterView
    @emitGotIt="pushInGotItWord"
    @emitUnfamiliar="pushInUnfamiliar"
    @emitDoNotKnow="pushInDoNotKnow"
    :doNotKnow="doNotKnow"
    :unfamiliar="unfamiliar"
  />
</template>