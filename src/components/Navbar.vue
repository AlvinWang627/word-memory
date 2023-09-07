<script setup>
import { ref } from 'vue';
const nowPage = ref('Home');
const navbarToggle = ref(false);
</script>
<template>
  <header>
    <input
      type="checkbox"
      class="navbar-toggle"
      id="navbar-toggle"
      :checked="navbarToggle === true"
      @click="navbarToggle = !navbarToggle"
    />
    <label for="navbar-toggle" class="navbar-toggle-label">
      <span class="hamburger"></span>
      <span class="circle"></span>
    </label>
    <router-link class="brand" :to="{ name: 'homeStartBtn' }"
      ><span
        :class="['title', { active: nowPage === 'Home' }]"
        @click="
          nowPage = 'Home';
          navbarToggle = false;
        "
      >
        Memory Word
      </span></router-link
    >
    <nav class="nav">
      <router-link :to="{ name: 'homeData' }"
        ><div
          :class="['button', { active: nowPage === 'Data' }]"
          @click="
            nowPage = 'Data';
            navbarToggle = !navbarToggle;
          "
        >
          Data
        </div></router-link
      >
      <router-link :to="{ name: 'setting' }"
        ><div
          :class="['button', { active: nowPage === 'Setting' }]"
          @click="
            nowPage = 'Setting';
            navbarToggle = !navbarToggle;
          "
        >
          Setting
        </div>
      </router-link>
      <div class="space" @click="navbarToggle = false">
        put something in here let feature work
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  background-color: $lightGary;
  width: 100%;
  z-index: 998;
  text-align: center;
  opacity: 0.9;
}
.title {
  color: $mainColor;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 60px;
}
.navbar-toggle {
  visibility: hidden;
  position: absolute;
}
.navbar-toggle:checked ~ .nav {
  transform: scale(1, 1);
  .button {
    opacity: 1;
    transition: opacity 0.2s ease-out 0.2s;
  }
}
.navbar-toggle-label {
  position: absolute;
  top: 50%;
  left: 7.5%;
  display: flex;
  align-items: center;
  .circle {
    cursor: pointer;
    position: absolute;
    height: 30px;
    width: 30px;
    z-index: 997;
  }
  .hamburger {
    cursor: pointer;
    z-index: 999;
    position: relative;
    width: 30px;
    height: 3px;
    background-color: $mainColor;
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 30px;
      height: 3px;
      background-color: $mainColor;
    }
    &::before {
      top: 8px;
    }
    &::after {
      bottom: 8px;
    }
  }
}
.nav {
  position: absolute;
  top: 100%;
  width: 100%;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 0.3s ease-out;
  background-color: $lightGary;
  .button {
    text-align: center;
    font-size: 1.2rem;
    line-height: 50px;
    color: $mainColor;
    border-bottom: 1px solid $gary;
    opacity: 0;
    &:hover,
    &.active {
      color: $mainTextColor;
      background-color: $bgColor;
    }
  }
  .space {
    width: 100%;
    height: 100vh;
    background-color: $lightGary;
    opacity: 0;
  }
}
@media screen and (min-width: 768px) {
  header {
    display: grid;
    grid-template-columns: 1fr auto minmax(550px, 3fr) 1fr;
  }
  .brand {
    grid-column: 2 / 3;
  }
  .navbar-toggle-label {
    display: none;
  }
  .nav {
    all: unset;
    grid-column: 3/ 4;
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    align-items: center;
    justify-content: end;
    grid-gap: 2rem;
    .button {
      border-bottom: 0;
      opacity: 1;
    }
    .space {
      display: none;
    }
  }
}
</style>
