<script setup>
import { ref } from 'vue';

const nowPage = ref('Home');
</script>

<template>
  <div class="container-md text-white vh-100 bg-dark">
    <div class="title text-center pt-5 fs-1">Memory word</div>
    <div class="text-center d-flex justify-content-center mt-5 fs-3">
      <router-link :to="{ name: 'homeStartBtn' }"
        ><div
          :class="['button', { active: nowPage === 'Home' }]"
          @click="nowPage = 'Home'"
        >
          Home
        </div></router-link
      >
      <router-link :to="{ name: 'homeData' }"
        ><div
          :class="['button', { active: nowPage === 'Data' }, 'mx-5']"
          @click="nowPage = 'Data'"
        >
          Data
        </div></router-link
      >
      <router-link :to="{ name: 'setting' }"
        ><div
          :class="['button', { active: nowPage === 'Setting' }]"
          @click="nowPage = 'Setting'"
        >
          Setting
        </div></router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.bi bi-arrow-left {
  font-size: 2rem;
}
a {
  text-decoration: none;
}
.button {
  color: #ffffff;
}
.button:hover {
  color: #31ffb9;
}
.button.active {
  color: #31ffb9;
}
</style>
