<script setup>
import { ref, inject, computed } from 'vue';

const gotItWords = inject('gotItWords');
const unfamiliarWords = inject('unfamiliarWords');
const doNotKnowWords = inject('doNotKnowWords');

const filters = {
  gotIt: gotItWords,
  unfamiliar: unfamiliarWords,
  doNotKnow: doNotKnowWords,
};

const visibility = ref('gotIt');
function setVisibility(tag) {
  visibility.value = tag;
}

const filteredWords = computed(() => {
  return filters[visibility.value].value;
});
</script>

<template>
  <div class="d-flex justify-content-around m-5">
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
      <label
        :class="['btn btn-outline-primary', { active: visibility === 'gotIt' }]"
        for="btnradio1"
        @click="setVisibility('gotIt')"
        >熟知</label
      >

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
      />
      <label
        :class="[
          'btn btn-outline-primary mx-5',
          { active: visibility === 'unfamiliar' },
        ]"
        for="btnradio2"
        @click="setVisibility('unfamiliar')"
        >不熟</label
      >

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio3"
        autocomplete="off"
      />
      <label
        :class="[
          'btn btn-outline-primary',
          { active: visibility === 'doNotKnow' },
        ]"
        for="btnradio3"
        @click="setVisibility('doNotKnow')"
        >不會</label
      >
    </div>
  </div>
  <div class="data-table overflow-auto">
    <table
      v-if="filteredWords.length !== 0"
      class="table table-dark table-striped table-hover"
    >
      <thead>
        <tr>
          <th scope="col" class="w-50">EN</th>
          <th scope="col" class="w-50">CH</th>
        </tr>
      </thead>
      <tbody v-for="word in filteredWords">
        <tr class="fs-2">
          <td>{{ word.en }}</td>
          <td>{{ word.ch }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>尚未有資料</div>
  </div>
</template>

<style scoped>
.data-table {
  max-height: 600px;
}
td {
  word-break: break-all;
}
.btn {
  width: 80px;
  color: white;
  height: 3rem;
  line-height: 2rem;
  border-color: #31ffb9;
}
.btn.active {
  background-color: #31ffb9;
  color: #000;
  border-color: #31ffb9;
}
.btn:hover {
  background-color: #31ffb9;
  color: #000;
  border-color: #31ffb9;
}
</style>
