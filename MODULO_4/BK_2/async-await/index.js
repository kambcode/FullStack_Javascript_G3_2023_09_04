import axios from "axios";

async function getDepartamentos() {
  const { data, status } = await axios.get(
    "https://api-colombia.com/api/v1/Department"
  );

  return data;
}

async function getPokemons() {
  const { data, status } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=33"
  );

  return data;
}

async function main() {
  const pokemons = await getPokemons();
  const departments = await getDepartamentos();

  for (let i = 0; i < departments.length; i++) {
    departments[i].pokemonName = pokemons.results[i].name;
  }

  console.log(departments);
}

main();
