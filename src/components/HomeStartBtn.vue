<template>
  <router-link :to="{ name: 'test-word' }"
    ><div class="d-flex justify-content-center fs-1" id="start-btn">
      Start memory
    </div>
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
  margin: 0 auto;
  margin-top: 20rem;
  max-width: 420px;
}
#start-btn:hover {
  color: #31ffb9;
}
</style>
