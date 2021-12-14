<template>
  <div v-if="country" class="row mt-5 text-center">
    <div class="card bg-light mx-auto shadow-lg" style="max-width: 800px">
      <div class="row">
        <div class="col-md-4 my-auto">
          <div>
            <h1 class="card-title">{{ country[0].name.common }}</h1>
          </div>
          <div class="p-0 m-0">
            <img
              :src="country[0].flags.png"
              class="img-fluid p-2"
              style="width: 200px; height: 200px"
              alt="..."
            />
          </div>
          <h3>Hoofdstad: {{ country[0].capital[0] }}</h3>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p>Population: {{ country[0].population }}</p>
            <p>Continents: {{ country[0].continents[0] }}</p>
            <p>{{ country[0].timezones[0] }}</p>
            <p></p>
            <iframe
              :src="
                'https://maps.google.com/maps?q=' +
                this.country[0].latlng[0] +
                ',' +
                this.country[0].latlng[1] +
                '&z=4&output=embed'
              "
              width="100%"
              height="250px"
              frameborder="0"
              style="border: 1px"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LandService from "@/services/LandService";

export default {
  name: "TicketDetails",
  props: ["name"],
  data() {
    return {
      country: null,
    };
  },
  created() {
    LandService.getCountry(this.name)
      .then((response) => {
        this.country = response.data;
        console.log(this.country);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
