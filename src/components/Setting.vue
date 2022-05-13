<script setup>
import { ref, inject, watch } from 'vue';
import { v4 as uuidv4 } from 'uuid';
const gotItWords = inject('gotItWords');
const unfamiliarWords = inject('unfamiliarWords');
const doNotKnowWords = inject('doNotKnowWords');
const inputEnglish = ref('');
const inputChinese = ref('');
const wordsList = ref([]);

function importWords() {
  wordsList.value.push(
    ...doNotKnowWords.value,
    ...gotItWords.value,
    ...unfamiliarWords.value
  );
}
importWords();

function addWord() {
  if (inputChinese.value === '' || inputEnglish === '') {
    return;
  }
  if (
    wordsList.value.some((wordEn) => wordEn.en === inputEnglish.value.trim())
  ) {
    return alert('單字已經存在');
  }
  doNotKnowWords.value.unshift({
    id: uuidv4(),
    en: inputEnglish.value.trim(),
    ch: inputChinese.value.trim(),
  });
  wordsList.value.unshift({
    id: uuidv4(),
    en: inputEnglish.value.trim(),
    ch: inputChinese.value.trim(),
  });
  inputChinese.value = '';
  inputEnglish.value = '';
}
function removeWord(_word) {
  wordsList.value = wordsList.value.filter((word) => word.id !== _word.id);
  doNotKnowWords.value = doNotKnowWords.value.filter(
    (word) => word.id !== _word.id
  );
  gotItWords.value = gotItWords.value.filter((word) => word.id !== _word.id);
  unfamiliarWords.value = unfamiliarWords.value.filter(
    (word) => word.id !== _word.id
  );
}
</script>

<template>
  <form action="" needs-validation>
    <div class="input-group mt-5">
      <input
        type="text"
        aria-label="English"
        class="form-control me-5"
        v-model="inputEnglish"
        id="validationCustom03"
        placeholder="EN"
      />
      <input
        type="text"
        aria-label="Chinese"
        class="form-control me-5"
        v-model="inputChinese"
        placeholder="CH"
      />
      <div>
        <button type="submit" class="btn btn-primary" @click.prevent="addWord">
          add word
        </button>
      </div>
    </div>
  </form>
  <div>
    <table class="table table-dark table-striped table-hover mt-5">
      <thead>
        <tr>
          <th scope="col" class="w-50">EN</th>
          <th scope="col" class="w-50">CH</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-for="word in wordsList">
        <tr class="fs-2">
          <td>{{ word.en }}</td>
          <td>{{ word.ch }}</td>
          <td class="delete" @click="removeWord(word)"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.delete:after {
  content: 'x';
  display: block;
  line-height: 1.2;
}
td {
  word-break: break-all;
}
</style>
