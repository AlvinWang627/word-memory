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

const gotItWords = ref([]);
function importGotIt() {
  gotItWords.value.splice(0, 0, ...dummyData);
}
importGotIt();
</script>
<!-- 設計成todoList的filter的格式 -->
<template>
  <div class="d-flex justify-content-around m-5">
    <div>got it</div>
    <div>unfamiliar</div>
    <div>do not know</div>
  </div>
  <table class="table table-dark table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">EN</th>
        <th scope="col">CH</th>
      </tr>
    </thead>
    <tbody v-for="word in gotItWords">
      <tr class="fs-2">
        <td>{{ word.en }}</td>
        <td>{{ word.ch }}</td>
      </tr>
    </tbody>
  </table>
</template>
