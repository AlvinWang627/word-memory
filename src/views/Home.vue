<script setup>
import { ref } from 'vue';

const test = ref('test');
</script>

<template>
  <div class="container-md text-white vh-100 bg-dark">
    <div class="title text-center pt-5 fs-1">Memory word</div>
    <div class="text-center d-flex justify-content-center mt-5 fs-3">
      <router-link :to="{ name: 'homeStartBtn' }"
        ><div class="">Home</div></router-link
      >
      <router-link :to="{ name: 'homeData' }"
        ><div class="mx-5">Data</div></router-link
      >
      <router-link :to="{ name: 'setting' }"
        ><div class="">Setting</div></router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.bi bi-arrow-left {
  font-size: 2rem;
}
</style>
