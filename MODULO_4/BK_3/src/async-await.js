import axios from "axios";

export async function getDepartamentos() {
  const { data, status } = await axios.get(
    "https://api-colombia.com/api/v1/Department"
  );

  return data;
}

export async function getPokemons() {
  const { data, status } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=33"
  );

  return data;
}
