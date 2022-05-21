<template>
  <div class="container mt-4" id="letters">
    <p>
      Hier geht es zu unserem heutigen
      <router-link to="/sightseeing" class="text-danger">Highlight!</router-link>
    </p>
    <A2zCardsComp></A2zCardsComp>
  </div>
</template>
<script setup>
import A2zCardsComp from '@/components/A2zCardsComp.vue';
</script>

<style scope>
.title {
  font-family: StyreneA-Medium;
}
.icon-lightGray {
  color: lightgrey;
}
</style>
