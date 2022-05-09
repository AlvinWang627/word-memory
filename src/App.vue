<script setup>
import { ref, provide, watchEffect } from 'vue';
import { RouterView } from 'vue-router';
const STORAGE_KEY_dummyData = 'memory-dummyData';
const STORAGE_KEY_gotIt = 'memory-word-gotIt';
const STORAGE_KEY_unfamiliar = 'memory-word-unfamiliar';
const STORAGE_KEY_doNotKnow = 'memory-word-doNotKnow';

const dummyData = ref(
  JSON.parse(localStorage.getItem(STORAGE_KEY_dummyData)) || [
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

const gotIt = ref(JSON.parse(localStorage.getItem(STORAGE_KEY_gotIt) || '[]'));
const unfamiliar = ref(
  JSON.parse(localStorage.getItem(STORAGE_KEY_unfamiliar) || '[]')
);
const doNotKnow = ref(
  JSON.parse(localStorage.getItem(STORAGE_KEY_doNotKnow) || '[]')
);

watchEffect(() => {
  localStorage.setItem(STORAGE_KEY_dummyData, JSON.stringify(dummyData.value));
  localStorage.setItem(STORAGE_KEY_gotIt, JSON.stringify(gotIt.value));
  localStorage.setItem(
    STORAGE_KEY_unfamiliar,
    JSON.stringify(unfamiliar.value)
  );
  localStorage.setItem(STORAGE_KEY_doNotKnow, JSON.stringify(doNotKnow.value));
});
function pushInGotItWord(data) {
  //將dummyData中的原始單字刪除
  dummyData.value = dummyData.value.filter((word) => word.id !== data.id);
  //將記住的單字放到gotIt中
  gotIt.value.push(data);
}
function pushInUnfamiliar(data) {
  //將dummyData中的原始單字刪除
  dummyData.value = dummyData.value.filter((word) => word.id !== data.id);
  //將記住的單字放到unfamiliar中
  unfamiliar.value.push(data);
}
function pushInDoNotKnow(data) {
  //將dummyData中的原始單字刪除
  dummyData.value = dummyData.value.filter((word) => word.id !== data.id);
  //將記住的單字放到doNotKnow中
  doNotKnow.value.push(data);
}
//provide到HomeData.vue
provide('gotItWords', gotIt);
provide('unfamiliarWords', unfamiliar);
provide('doNotKnowWords', doNotKnow);
</script>

<template>
  <RouterView
    @emitGotIt="pushInGotItWord"
    @emitUnfamiliar="pushInUnfamiliar"
    @emitDoNotKnow="pushInDoNotKnow"
    :dummy-data="dummyData"
  />
</template>

<style></style>
