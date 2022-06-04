<script setup>
import { ref } from 'vue';
const nowPage = ref('Home');
</script>
<template>
  <header>
    <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
    <label for="navbar-toggle" class="navbar-toggle-label">
      <span class="hamburger"></span>
      <span class="circle"></span>
    </label>
    <router-link :to="{ name: 'homeStartBtn' }"
      ><span
        :class="['title', { active: nowPage === 'Home' }]"
        @click="nowPage = 'Home'"
      >
        Memory Word
      </span></router-link
    >
    <nav class="nav">
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
        </div>
      </router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: $navBgColor;
  position: relative;
  z-index: 998;
  text-align: center;
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
  .navbar-toggle-label {
    position: absolute;
    top: 50%;
    left: 7.5%;
    display: flex;
    align-items: center;
    .circle {
      position: absolute;
      height: 30px;
      width: 30px;
      z-index: 997;
    }
    .hamburger {
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
  .navbar-toggle:checked ~ .nav {
    transform: scale(1, 1);
    .button {
      opacity: 1;
      transition: opacity 0.2s ease-out 0.2s;
    }
  }
  .nav {
    position: absolute;
    top: 100%;
    width: 100%;
    border-bottom: 1px solid $borderColor;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 0.3s ease-out;
    background-color: $navBgColor;
    .button {
      text-align: center;
      font-size: 1.2rem;
      line-height: 50px;
      color: $mainColor;
      &:hover,
      &.active {
        color: $mainTextColor;
        background-color: $bgColor;
      }
      opacity: 0;
    }
  }
}
</style>
