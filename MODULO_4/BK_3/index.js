import { getPokemons, getDepartamentos } from "./src/async-await.js";
import { readFile, writeFile } from "./src/streams.js";
import fs from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function getData() {
  //Promise en Paralelo (at the same time)

  const response = await Promise.all([getPokemons(), getDepartamentos()]);

  response[0]; //pokemons
  response[1]; //departments

  const [pokemons, departments] = await Promise.all([
    getPokemons(),
    getDepartamentos(),
  ]);

  for (let i = 0; i < departments.length; i++) {
    departments[i].pokemonName = pokemons.results[i].name;
  }

  //   console.log(departments);

  const data = JSON.stringify(departments);

  writeFile("./common/pokemons_x_departments.json", data);
}

function transformData() {
  const filePath = join(__dirname, "./common/pokemons_x_departments.json");
  const response = fs.readFileSync(filePath, "utf-8");

  const data = JSON.parse(response);

  // const result = [];

  //   for (let i = 0; i < data.length; i++) {

  //     const newObject = {
  //       ...data[i],
  //       description: `${data[i].description} y su pokemon oficial es: ${data[i].pokemonName}`,
  //     };

  //     result.push(newObject);

  //   }

  const newArray = data.map((department) => {
    return {
      ...department,
      description:
        department.description +
        " y su pokemon oficial es: " +
        department.pokemonName,
    };
  });

  const newData = JSON.stringify(newArray);

  writeFile("./common/pokemons_x_departments_transformed.json", newData);
}

async function main() {
  //   await getData();

  transformData();
}

main();
