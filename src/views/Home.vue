<script setup></script>
<template>
  <div class="container-md text-white vh-100 bg-dark">
    <div class="title text-center pt-5 fs-1">Memory word</div>
    <div class="text-center d-flex justify-content-center mt-5 fs-3">
      <router-link :to="{ name: 'homeStartBtn' }"
        ><div class="me-5">Home</div></router-link
      >
      <router-link :to="{ name: 'homeData' }"
        ><div class="me-1">Data</div></router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
.bi bi-arrow-left {
  font-size: 2rem;
}
</style>
