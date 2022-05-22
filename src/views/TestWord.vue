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
  <div
    v-show="length === 0"
    class="container-md text-white vh-100 bg-dark d-flex align-items-center display-5 p-5 justify-content-center"
  >
    <div>
      <div>目前沒單字可以測試</div>

      <router-link
        class="homeBtn d-flex justify-content-center mt-5"
        :to="{ name: 'homeStartBtn' }"
        >返回首頁</router-link
      >
    </div>
  </div>
  <div
    class="container-md text-white vh-100"
    v-for="(word, index) in unTestWords"
    :key="word.id"
    v-show="index === 0"
  >
    <div
      class="text-center bg-secondary fs-2 h-100 my-auto d-flex flex-column justify-content-between"
    >
      <div class="text-center fs-2 bg-dark py-2 position-relative">
        <router-link :to="{ name: 'homeStartBtn' }" style="color: white">
          <i class="bi bi-chevron-left" id="arrow"></i>
        </router-link>
        {{ word.en }}
      </div>
      <div
        class="h-100"
        id="translate"
        v-show="ansButton"
        @click="ansButton = !ansButton"
      >
        點這裡看翻譯
      </div>
      <div v-show="!ansButton">{{ word.ch }}</div>
      <div class="button-group" v-show="!ansButton">
        <button
          type="button"
          class="btn btn-primary rounded-pill w-25"
          @click.stop.prevent="testButton(word, $event)"
        >
          我會了
        </button>
        <button
          type="button"
          class="btn btn-danger rounded-pill w-25"
          @click.stop.prevent="testButton(word, $event)"
        >
          不熟
        </button>
        <button
          type="button"
          class="btn btn-success rounded-pill w-25"
          @click.stop.prevent="testButton(word, $event)"
        >
          我不會
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.homeBtn {
  text-decoration: none;
  color: #31ffb9;
  border: 1px #31ffb9 solid;
  border-radius: 100px;
  padding: 10px;
}
.container-md {
  padding: 0;
}
.button-group {
  display: flex;
  justify-content: space-around;
  padding-bottom: 1rem;
}
#translate {
  display: flex;
  justify-content: center;
  align-items: center;
}
#arrow {
  position: absolute;
  top: 10px;
  left: 15px;
}
</style>
