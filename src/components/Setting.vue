<script setup>
import { ref, inject } from 'vue';
import { v4 as uuidv4 } from 'uuid';
const gotItWords = inject('gotItWords');
const unfamiliarWords = inject('unfamiliarWords');
const doNotKnowWords = inject('doNotKnowWords');
const inputEnglish = ref('');
const inputChinese = ref('');
const wordsList = ref([]);

function importWords() {
  wordsList.value.push(
    ...gotItWords.value,
    ...unfamiliarWords.value,
    ...doNotKnowWords.value
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
function editWord(editTarget, wordId, enWord, chWord) {
  for (let i = 0; i < editTarget.value.length; i++) {
    if (editTarget.value[i].id === wordId) {
      editTarget.value[i] = {
        id: wordId,
        en: enWord,
        ch: chWord,
      };
    }
  }
}

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
function updateWord({ wordId, enWord, chWord }) {
  toggleIsEditing(wordId);
  editWord(gotItWords, wordId, enWord, chWord);
  editWord(unfamiliarWords, wordId, enWord, chWord);
  editWord(doNotKnowWords, wordId, enWord, chWord);
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
  toggleIsEditing(wordId);
}
</script>

<template>
  <div class="container">
    <form action="" needs-validation>
      <div class="input-group">
        <input
          type="text"
          aria-label="English"
          class="input"
          v-model="inputEnglish"
          id="validationCustom03"
          placeholder="EN"
        />
        <input
          type="text"
          aria-label="Chinese"
          class="input"
          v-model="inputChinese"
          placeholder="CH"
        />
        <div class="button">
          <button type="submit" class="submit" @click.prevent="addWord">
            新增單字
          </button>
        </div>
      </div>
    </form>
    <div class="table-group">
      <table>
        <thead>
          <tr>
            <th scope="col">EN</th>
            <th scope="col">CH</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="word in wordsList">
          <tr>
            <td>
              <div
                v-show="!word.isEditing"
                @dblclick="toggleIsEditing(word.id)"
              >
                {{ word.en }}
              </div>
              <input
                class="edit-inputEn"
                type="text"
                v-show="word.isEditing"
                v-model="word.en"
              />
            </td>
            <td class="wordEn">
              <div
                v-show="!word.isEditing"
                @dblclick="toggleIsEditing(word.id)"
              >
                {{ word.ch }}
              </div>
              <input
                class="edit-input"
                type="text"
                v-show="word.isEditing"
                v-model="word.ch"
              />
              <span class="cancel" v-show="word.isEditing"
                ><i
                  class="bi bi-x"
                  @click.stop.prevent="cancelEdit(word.id)"
                ></i
              ></span>
            </td>
            <td class="icon">
              <i
                class="bi bi-check-lg"
                v-show="word.isEditing"
                @click.stop.prevent="
                  updateWord({
                    wordId: word.id,
                    enWord: word.en,
                    chWord: word.ch,
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
  </div>
</template>
<style lang="scss" scoped>
.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  .input {
    font-size: 20px;
    height: 30px;
    width: 60%;
    max-width: 70%;
    margin-top: 5px;
  }
  .submit {
    margin-top: 5px;
    color: $mainColor;
    padding: 0 10px;
    width: 100%;
    max-width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: $mainTextColor;
    border: 0;
    font-weight: bold;
    cursor: pointer;
    color: $bgColor;
  }
}
.table-group {
  text-align: center;
  margin-top: 1rem;
  table {
    width: 100%;
    margin: 0 auto;
    th {
      padding-bottom: 5px;
    }
    tbody {
      .icon {
        cursor: pointer;
      }
      td {
        padding: 0.5rem;
      }
      margin-bottom: 5px;
      &:nth-child(even) {
        background-color: $secondaryTextColor;
      }
      .edit-input {
        padding-right: 12px;
        width: 100%;
        font-size: 20px;
      }
      .edit-inputEn {
        font-size: 20px;
        width: 100%;
      }
    }
  }
}
.wordEn {
  word-break: break-all;
  position: relative;
}
.cancel {
  position: absolute;
  color: $bgColor;
  top: 13px;
  right: -10px;
  cursor: pointer;
}
</style>
