<script setup></script>
<template>
  <div class="container-md text-white vh-100 bg-dark">
    <div class="title text-center">memory word</div>
    <div class="text-center">
      <div>Home</div>
      <div>Data</div>
    </div>
    <router-link :to="{ name: 'test-word' }" class="text-center"
      >Start memory</router-link
    >
  </div>
</template>

<style>
.bi bi-arrow-left {
  font-size: 2rem;
}
</style>
