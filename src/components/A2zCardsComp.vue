<template>
  <div>
    <div class="d-flex justify-content-center">
      <a
        :href="`#${lett.letter}`"
        v-for="(lett, i) of store.a2z"
        :key="i"
        class="fs-5 mx-2 text-danger fw-bold"
        >{{ lett.letter }}</a
      >
    </div>
    <div class="flex" v-for="(lett, i) of store.a2z" :key="i">
      <div class="fs-4 mt-4 text-danger fw-bold">
        <span :id="`${lett.letter}`" class="fs-3 mx-2 text-danger fw-bold">{{ lett.letter }}</span>
        <a href="#letters" class="icon-lightGray">
          <i class="ms-4 fa-regular fa-circle-up"></i>
        </a>
      </div>
      <div class="d-flex flex-wrap justify-content-around mb-5 mt-2">
        <div class="card mt-4" style="width: 18rem" v-for="(lett2, i) of lett.pics" :key="i">
          <div>
            <img :src="lett2.image" class="card-img-top img-fluid" />
          </div>
          <div class="card-body">
            <h5 class="card-title fs-5">{{ lett2.title }}</h5>
            <span class="fs-6" v-if="reduceDes(lett2.description).slice(-1) != '.'"
              >{{ reduceDes(lett2.description) }}...</span
            >
            <span class="fs-6" v-if="reduceDes(lett2.description).slice(-1) == '.'">{{
              reduceDes(lett2.description)
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSchenesStore } from '../stores/schenesStore';
const store = useSchenesStore();

function reduceDes(str) {
  return str.split(' ').slice(0, 20).join(' ');
}
</script>
