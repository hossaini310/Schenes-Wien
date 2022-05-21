<template>
  <div class="container">
    <div class="row">
      <div class="col-sm mb-4">
        <div class="fs-2 text-danger f-black">Events</div>
        <div class="mt-3" v-for="event in store.events" :key="event.id">
          <span>
            <router-link
              class="text-gray"
              :to="`/events/${event.title.toLowerCase().split(' ').join('').split('-').join('')}`"
              >{{ event.title }}</router-link
            >
          </span>
        </div>
      </div>
      <div class="w-75 m-auto">
        <div class="mb-4 mt-3">
          <img
            class="img-fluid"
            src="/images/events/40995-strandbar-herrmann-donaukanal-sommer-outdoor-abendstimmung.jpg"
            alt="image"
          />
        </div>
        <span>
          Sobald es draußen wärmer wird und die Sonne scheint, verlängert sich das Leben in Wien
          nach draußen. Und heuer mehr denn je. Zahlreiche Lokale bieten den perfekten Platz zum
          Chillen und nebenbei die Sonne zu genießen.
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSchenesStore } from '@/stores/schenesStore';
const store = useSchenesStore();
</script>

<style scope>
.f-black {
  font-family: 'StyreneA-Bold' !important;
}
.text-gray {
  color: #55595c !important;
}
</style>
