<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
  doNotKnow: {
    type: Array,
    required: true,
  },
  unfamiliar: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(['emitGotIt', 'emitUnfamiliar', 'emitDoNotKnow']);
const ansButton = ref(true);
const unTestWords = ref([]);
function importWord() {
  unTestWords.value.push(...props.doNotKnow, ...props.unfamiliar);
}
importWord();
let length = unTestWords.value.length;
function testButton(word, event) {
  const target = event.target.innerText;
  if (target === '我會了') {
    unTestWords.value.splice(0, 1);
    emit('emitGotIt', word);
  } else if (target === '不熟') {
    unTestWords.value.splice(0, 1);
    emit('emitUnfamiliar', word);
  } else if (target === '我不會') {
    unTestWords.value.splice(0, 1);
    emit('emitDoNotKnow', word);
  }
  length--;
  if (length === 0) {
    alert('words are tested');
    router.push({ name: 'homeStartBtn' });
  }
  ansButton.value = !ansButton.value;
}
</script>

<template>
  <div v-show="length === 0" class="cover-page">
    <div class="hint">
      <div class="text">目前沒單字可以測試</div>

      <router-link class="homeBtn" :to="{ name: 'homeStartBtn' }"
        >返回首頁</router-link
      >
    </div>
  </div>
  <div
    class="container"
    v-for="(word, index) in unTestWords"
    :key="word.id"
    v-show="index === 0"
  >
    <div class="wordEn">
      <router-link :to="{ name: 'homeStartBtn' }" style="color: white">
        <i class="bi bi-chevron-left" id="arrow"></i>
      </router-link>
      {{ word.en }}
    </div>
    <div class="translate" v-show="ansButton" @click="ansButton = !ansButton">
      點這裡看翻譯
    </div>
    <div class="wordCh" v-show="!ansButton">{{ word.ch }}</div>
    <div class="button-group" v-show="!ansButton">
      <button class="btn" @click.stop.prevent="testButton(word, $event)">
        我會了
      </button>
      <button class="btn" @click.stop.prevent="testButton(word, $event)">
        不熟
      </button>
      <button class="btn" @click.stop.prevent="testButton(word, $event)">
        我不會
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  .wordEn {
    width: 100%;
    padding: 10px 0;
    background-color: $borderColor;
    font-size: 1.5rem;
    #arrow {
      position: absolute;
      top: 10px;
      left: 5px;
    }
  }
  .translate,
  .wordCh {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 92.3vh;
    background-color: $bgColor;
    font-size: 1.5rem;
  }
  .wordCh {
    height: 84vh;
  }
  .button-group {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: $bgColor;
    height: 8.3vh;
    .btn {
      border: 0;
      border-radius: 5px;
      width: 20%;
      height: 30px;
      cursor: pointer;
      color: #ffffff;
    }
    .btn:nth-child(1) {
      background-color: #dc3545;
    }
    .btn:nth-child(2) {
      background-color: #0d6efd;
    }
    .btn:nth-child(3) {
      background-color: #198754;
    }
  }
}
.hint {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .text {
    padding: 10px;
  }
  .homeBtn {
    text-align: center;
    border: 0;
    border-radius: 5px;
    width: 100px;
    line-height: 28px;
    height: 30px;
    color: $mainColor;
    background-color: #198754;
  }
}
</style>
