<template>
  <div class="">
    <div class="w-75 m-auto">
      <div class="fs-1 mt-4 text-danger fw-bold mb-4">
        <router-link to="/events" class="icon-lightGray">
          <i class="fa-regular fa-circle-left"></i>
        </router-link>
      </div>
      <h2 class="text-danger f-black mb-3">{{ event.title }}</h2>
      <img class="img-fluid d-flex justify-content-center" :src="event.pic" alt="image" />
      <div class="mt-3">
        <span>{{ event.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useSchenesStore } from '@/stores/schenesStore.js';

const store = useSchenesStore();
const Router = useRouter();

let event = ref({});

onMounted(() => {
  let eventID = Router.currentRoute.value.params.id;
  console.log(Router.currentRoute.value.params);
  event.value = store.events.find(({ title }) => {
    title = title.toLowerCase().split(' ').join('').split('-').join('');
    eventID = eventID.toLowerCase().split(' ').join('').split('-').join('');
    if (title == eventID) return title;
  });
});
</script>
<style scope>
.f-black {
  font-family: 'StyreneA-Bold' !important;
}
.text-gray {
  color: #55595c !important;
}
.icon-lightGray {
  color: lightgrey;
}
</style>
