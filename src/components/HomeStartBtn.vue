<template>
  <router-link :to="{ name: 'test-word' }"
    ><div class="text-center fs-1" id="start-btn">Start memory</div>
  </router-link>
</template>

<style scoped>
a {
  text-decoration: none;
}
#start-btn {
  border: 1px solid #31ffb9;
  padding: 20px;
  border-radius: 100px;
  color: #ffffff;
  margin-top: 20rem;
}
#start-btn:hover {
  color: #31ffb9;
}
</style>
