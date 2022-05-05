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
const visibility = ref('');
const gotItWords = ref([]);
const unfamiliar = ref(['banana']);
const doNotKnow = ref(['cat']);
function importGotIt() {
  gotItWords.value.push(...dummyData);
}
importGotIt();
</script>
<!-- 設計成todoList的filter的標籤格式 -->
<template>
  <div class="d-flex justify-content-around m-5">
    <!-- <router-link tag="button">abc</router-link>> -->
    <div
      class="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio1"
        autocomplete="off"
        checked
      />
      <label class="btn btn-outline-primary" for="btnradio1">got it</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary mx-5" for="btnradio2"
        >unfamiliar</label
      >

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio3"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="btnradio3">do not know</label>
    </div>
  </div>
  <table
    class="table table-dark table-striped table-hover"
  >
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
