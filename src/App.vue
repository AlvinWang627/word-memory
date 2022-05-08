<script setup>
import { ref, provide } from 'vue';
import { RouterView } from 'vue-router';
const dummyData = ref([
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
]);

const gotIt = ref([]);
const unfamiliar = ref([]);
const doNotKnow = ref([]);
function pushInGotItWord(data) {
  //將dummyData中的原始單字刪除
  dummyData.value = dummyData.value.filter((word) => word.id !== data.id);
  //將記住的單字放到gotIt中
  gotIt.value.push(data);
}
function pushInUnfamiliar(data) {
  //將dummyData中的原始單字刪除
  dummyData.value = dummyData.value.filter((word) => word.id !== data.id);
  //將記住的單字放到gotIt中
  unfamiliar.value.push(data);
}
function pushInDoNotKnow(data) {
  //將dummyData中的原始單字刪除
  dummyData.value = dummyData.value.filter((word) => word.id !== data.id);
  //將記住的單字放到gotIt中
  doNotKnow.value.push(data);
}

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
