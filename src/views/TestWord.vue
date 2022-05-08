<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps({
  dummyData: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(['emitGotIt', 'emitUnfamiliar', 'emitDoNotKnow']);

const router = useRouter();
const ansButton = ref(true);
const unTestWords = ref([]);
function importWord() {
  unTestWords.value.splice(0, 0, ...props.dummyData);
}
importWord();
let length = unTestWords.value.length;
function gotItButton(word, event) {
  const target = event.target.innerText;
  if (target === '我會了') {
    // gotIt.value.push({ id: word.id, en: word.en, ch: word.ch });
    unTestWords.value.splice(0, 1);
    emit('emitGotIt', word);
  } else if (target === '不熟') {
    // unfamiliar.value.push({ id: word.id, en: word.en, ch: word.ch });
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
          @click.stop.prevent="gotItButton(word, $event)"
        >
          我會了
        </button>
        <button
          type="button"
          class="btn btn-danger rounded-pill w-25"
          @click.stop.prevent="gotItButton(word, $event)"
        >
          不熟
        </button>
        <button
          type="button"
          class="btn btn-success rounded-pill w-25"
          @click.stop.prevent="gotItButton(word, $event)"
        >
          我不會
        </button>
      </div>
    </div>
  </div>
</template>

<style>
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
