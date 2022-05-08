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
        class="btn btn-outline-primary"
        for="btnradio1"
        @click="setVisibility('gotIt')"
        >got it</label
      >

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
      />
      <label
        class="btn btn-outline-primary mx-5"
        for="btnradio2"
        @click="setVisibility('unfamiliar')"
        >unfamiliar</label
      >

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio3"
        autocomplete="off"
      />
      <label
        class="btn btn-outline-primary"
        for="btnradio3"
        @click="setVisibility('doNotKnow')"
        >do not know</label
      >
    </div>
  </div>
  <table class="table table-dark table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">EN</th>
        <th scope="col">CH</th>
      </tr>
    </thead>
    <tbody v-for="word in filteredWords">
      <tr class="fs-2">
        <td>{{ word.en }}</td>
        <td>{{ word.ch }}</td>
      </tr>
    </tbody>
  </table>
</template>
