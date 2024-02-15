import { Transform } from "stream";
import { getPokemons, getDepartamentos } from "./src/async-await.js";
import fs from "fs";

async function getData() {
  const [pokemons, departments] = await Promise.all([
    getPokemons(),
    getDepartamentos(),
  ]);

  for (let i = 0; i < departments.length; i++) {
    departments[i].pokemonName = pokemons.results[i].name;
  }

  const data = JSON.stringify(departments);

  return data;
}

async function main() {
  const readableStream = fs.createReadStream(
    "./common/pokemons_x_departments.json",
    { encoding: "utf-8" }
  );

  const writeStreamTransformed = fs.createWriteStream(
    "./common/pokemons_x_departments_transformed.json"
  );

  readableStream.pipe(process.stdout);
}

main();
