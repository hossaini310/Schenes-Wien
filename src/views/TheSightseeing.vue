<template>
  <div>
    <div class="intro-pic d-flex justify-content-center align-items-center">
      <div class="imgcon"></div>
      <div class="display-1 hh d-flex flex-column align-items-center text-white">
        <span class="text-center intro-text">Sightseeing in <br />Wien</span>
      </div>
    </div>
    <div class="container mt-4">
      <p>
        Es gibt viel zu sehen: Vom gotischen Stephansdom über die imperiale Hofburg bis zu
        Jugendstil, vom Barockschloss Schönbrunn über spannende Museen bis zu aktueller Architektur
      </p>
    </div>
  </div>
  <RouterView />
</template>
<script setup></script>

<style scope>
.intro-text {
  font-family: StyreneA-Black;
}
.intro-pic {
  background-image: url(/images/1-blick-auf-die-ringstrasse-40707.jpg);
  background-size: cover;
  height: 500px;
}
.hh {
  position: absolute;
}

.imgcon {
  position: absolute;
  background-color: black !important;
  height: 500px;
  width: 100%;
  opacity: 0.4;
}
</style>
