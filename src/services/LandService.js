import axios from "axios";

const clientApiService = axios.create({
  // const want link naar data blijft altijd gelijk
  baseURL: "https://restcountries.com/v3.1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});
export default {
  getCountries() {
    return clientApiService.get("/all"); // opsplitsen link zo kan je verschillende variabelen meegevn
  },
  getCountry(name) {
    console.log(name);
    return clientApiService.get("/name/" + name);
  },
};
