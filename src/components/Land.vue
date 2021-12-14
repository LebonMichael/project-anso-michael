<template>
  <div class="my-3 ">
    <div class="card bg-light shadow-lg border-1" style="width: 18rem; height: auto">
      <div class="mt-2">
        <img
          :src="country.flags.png"
          class="img-fluid p-2"
          style="width: 200px; height: 200px"
          alt="..."
        />
      </div>
      <div class="card-body">
        <router-link
          :to="{ name: 'LandDetails', params: { name: country.name.common } }"
          style="text-decoration: none; color: black"
        >
          <h2 class="card-text">{{ country.name.common }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Land",
  props: {
    country: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
