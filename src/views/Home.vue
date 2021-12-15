<template>
  <h1>Landen van de wereld</h1>
  <div class="row row-cols-lg-4">
    <Land v-for="x in countries" :key="x" :country="x"> </Land>
  </div>
</template>

<script>
// @ is an alias to /src
import Land from "@/components/Land.vue";
import LandService from "../services/LandService";

export default {
  name: "Home",
  components: {
    Land,
  },
  data() {
    return {
      countries: null,
    };
  },
  created() {
    LandService.getCountries()
      .then((response) => {
        this.countries = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
