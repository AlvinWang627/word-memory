<script setup>
import Navbar from './../components/Navbar.vue';
</script>

<template>
  <Navbar />
  <div class="container">
    <router-view class="www"></router-view>
  </div>
</template>
<style lang="scss" scoped>
.container {
  padding-top: 80px;
}
</style>
