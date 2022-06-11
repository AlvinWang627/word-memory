<script setup>
import { ref, inject, computed } from 'vue';

const gotItWords = inject('gotItWords');
const unfamiliarWords = inject('unfamiliarWords');
const doNotKnowWords = inject('doNotKnowWords');
const visibility = ref('gotIt');

const filters = {
  gotIt: gotItWords,
  unfamiliar: unfamiliarWords,
  doNotKnow: doNotKnowWords,
};

function setVisibility(tag) {
  visibility.value = tag;
}

const filteredWords = computed(() => {
  return filters[visibility.value].value;
});
</script>

<template>
  <div class="container">
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
        :class="['btn-label', { active: visibility === 'gotIt' }]"
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
        :class="['btn-label', { active: visibility === 'unfamiliar' }]"
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
        :class="['btn-label', { active: visibility === 'doNotKnow' }]"
        for="btnradio3"
        @click="setVisibility('doNotKnow')"
        >不會</label
      >
    </div>
    <div class="table-group">
      <table v-if="filteredWords.length !== 0">
        <thead>
          <tr>
            <th scope="col">EN</th>
            <th scope="col">CH</th>
          </tr>
        </thead>
        <tbody v-for="word in filteredWords">
          <tr>
            <td>{{ word.en }}</td>
            <td>{{ word.ch }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else>尚未有資料</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 90%;
}
.btn-group {
  display: flex;
  justify-content: space-around;
  input {
    display: none;
  }
  .btn-label {
    padding: 10px;
    text-align: center;
    line-height: 30px;
    margin: 0 10px;
    width: 100%;
    max-width: 100px;
    height: 30px;
    border-radius: 25px;
    border: 2px solid $mainTextColor;
    cursor: pointer;
    &.active,
    &:hover {
      color: $bgColor;
      background-color: $mainTextColor;
    }
  }
}
.table-group {
  text-align: center;
  margin-top: 2rem;
  table {
    width: 100%;
  }
  th {
    padding-bottom: 10px;
    font-size: 1.3rem;
  }
  td {
    min-width: 150px;
    word-break: break-all;
    max-width: 100%;
    font-size: 1.2rem;
    padding: 0.5rem;
    border-top: 1px solid $borderColor;
  }
  tbody {
    &:nth-child(even) {
      background-color: $secondaryTextColor;
    }
  }
}

@media screen and (min-width: 768px) {
  .container {
    width: 65%;
  }
}
</style>
