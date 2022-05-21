<template>
  <div>
    <header>
      <div class="overlay"></div>
      <video autoplay muted loop>
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-white">
            <div class="headerLogo"></div>
            <h1 class="text-white f-black display-5">
              Spannende Ziele und nachhaltige Reiseerlebnisse
            </h1>
            <p class="lead mb-0">Zu reisen ist zu leben</p>
          </div>
        </div>
      </div>
    </header>
    <div class="mt-4 mb-2 text-danger text-center fs-5">
      Der offizielle Online-Reiseführer der HTL Wien West
    </div>
  </div>
</template>
<script setup></script>
<style scope>
.f-black {
  font-family: 'StyreneA-Bold' !important;
}
header {
  position: relative;
  background-color: black;
  height: 75vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}
</style>
