<template>
  <router-link :to="{ name: 'test-word' }"
    ><div class="text-center fs-1 mt-5" id="start-btn">Start memory</div>
  </router-link>
</template>

<style scoped>
a {
  text-decoration: none;
}
#start-btn {
  color: #ffffff;
}
#start-btn:hover {
  color: #31ffb9;
}
</style>
