<script setup>
import Navbar from './../components/Navbar.vue';
</script>

<template>
  <Navbar />
  <div class="home">
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
.home {
  padding-top: 80px;
}
</style>
