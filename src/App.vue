<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar></NavBar>
  <div>
    <RouterView />
  </div>
</template>

<style>
body,
router-link {
  font-family: 'StyreneA-Regular' !important;
}
a {
  text-decoration: none;
}
</style>
