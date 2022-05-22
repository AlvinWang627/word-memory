<script setup>
import { ref } from 'vue';

const nowPage = ref('Home');
</script>

<template>
  <div class="container-lg text-white bg-dark">
    <div class="text-center d-flex justify-content-center fs-3 pt-5">
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
  min-width: 92px;
  border: 1px solid #31ffb9;
  padding: 10px;
  border-radius: 100px;
  color: #ffffff;
}
.button:hover {
  color: #31ffb9;
}
.button.active {
  color: #31ffb9;
}
.container-lg {
  min-height: 851px;
}


</style>
