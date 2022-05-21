<template>
  <div>
    <nav class="navv navbar bg-primary p-1 fs-6">
      <div class="text-white">
        <span class="ms-4">Folge uns auf</span>
        <i class="ms-5 me-3 fa-brands fa-youtube"></i>
        <i class="me-3 fa-brands fa-facebook"></i>
        <i class="me-3 fa-brands fa-instagram-square"></i>
        <i class="me-3 fa-brands fa-twitter"></i>
      </div>
      <div class="text-white ms-4">
        <i class="fa-solid fa-envelope"></i>
        <span class="ms-2 me-4">Newsletter</span>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="nav-link" to="/"
          ><img class="logo" :src="Logo" alt="logo"
        /></router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse mt-3" id="navbarColor03">
          <ul class="navbar-nav me-auto">
            <li class="nav-item"></li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sightseeing">sightseeing</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/events">Events</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shopping">Shopping</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/lifestyle">Lifestyle & Szene</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import Logo from '/images/logo.svg';

defineProps({
  name: String,
});
</script>

<style>
.logo {
  width: 100px;
}
.navv {
  height: 50px;
}
</style>
