<script setup>
import { ref, inject } from 'vue';
import { v4 as uuidv4 } from 'uuid';
const gotItWords = inject('gotItWords');
const unfamiliarWords = inject('unfamiliarWords');
const doNotKnowWords = inject('doNotKnowWords');
const inputEnglish = ref('');
const inputChinese = ref('');
const wordsList = ref([]);
const isEditing = ref(false);

function importWords() {
  wordsList.value.push(
    ...doNotKnowWords.value,
    ...gotItWords.value,
    ...unfamiliarWords.value
  );
  wordsList.value = wordsList.value.map((word) => ({
    ...word,
    isEditing: false,
  }));
}
importWords();

function addWord() {
  if (
    inputChinese.value.trim().length === 0 ||
    inputEnglish.value.trim().length === 0
  ) {
    return alert('不可以空白');
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
    isEditing: false,
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
// edit
function toggleIsEditing(wordId) {
  wordsList.value = wordsList.value.map((word) => {
    if (word.id === wordId) {
      return {
        ...word,
        isEditing: !word.isEditing,
        EnCaches: word.en,
        ChCaches: word.ch,
      };
    }
    return word;
  });
}
function updateWord({ wordId, EnWord, ChWord }) {
  toggleIsEditing(wordId);
}

function cancelEdit(wordId) {
  wordsList.value = wordsList.value.map((word) => {
    if (word.id === wordId) {
      return {
        ...word,
        en: word.EnCaches,
        ch: word.ChCaches,
      };
    }
    return word;
  });
  this.toggleIsEditing(wordId);
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
          <td>
            <div v-show="!word.isEditing" @dblclick="toggleIsEditing(word.id)">
              {{ word.en }}
            </div>
            <input
              class="w-100 h-100 ps-2"
              type="text"
              v-show="word.isEditing"
              v-model="word.en"
            />
          </td>
          <td class="wordEn">
            <div v-show="!word.isEditing" @dblclick="toggleIsEditing(word.id)">
              {{ word.ch }}
            </div>
            <input
              class="w-100 h-100 ps-2"
              type="text"
              v-show="word.isEditing"
              v-model="word.ch"
            />
            <span class="cancel" v-show="word.isEditing"
              ><i class="bi bi-x" @click.stop.prevent="cancelEdit(word.id)"></i
            ></span>
          </td>
          <td class="icon">
            <i
              class="bi bi-check-lg"
              v-show="word.isEditing"
              @click.stop.prevent="
                updateWord({
                  wordId: word.id,
                  EnWord: word.en,
                  ChWord: word.ch,
                })
              "
            ></i>
            <i
              class="bi bi-trash"
              v-show="!word.isEditing"
              @click="removeWord(word)"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
td {
  word-break: break-all;
}
.icon {
  cursor: pointer;
}
.icon :hover {
  color: gray;
}
.wordEn {
  position: relative;
}
.cancel {
  position: absolute;
  color: black;
  right: 15px;
  cursor: pointer;
}
.cancel:hover {
  color: gray;
}
</style>
