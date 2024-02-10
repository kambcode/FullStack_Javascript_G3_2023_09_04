import { getPokemons, getDepartamentos } from "./src/async-await.js";
import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function getData() {
  //Promise en Paralelo (at the same time)

  // Opcion 1

  //   const response = await Promise.all([getPokemons(), getDepartamentos()]);

  //   response[0]; //pokemons
  //   response[1]; //departments

  // Opcion 2

  const [pokemons, departments] = await Promise.all([
    getPokemons(),
    getDepartamentos(),
  ]);

  for (let i = 0; i < departments.length; i++) {
    departments[i].pokemonName = pokemons.results[i].name;
  }

  const data = JSON.stringify(departments);

  fs.writeFileSync("./common/pokemons_x_departments.json", data);
}

function transformData() {
  //   const filePath = resolve(__dirname, "./common/pokemons_x_departments.json");
  const filePath = "./common/pokemons_x_departments.json";
  const response = fs.readFileSync(filePath, "utf-8");

  const data = JSON.parse(response);

  // Opcion 1

  // const result = [];

  //   for (let i = 0; i < data.length; i++) {

  //     const newObject = {
  //       ...data[i],
  //       description: `${data[i].description} y su pokemon oficial es: ${data[i].pokemonName}`,
  //     };

  //     result.push(newObject);

  //   }

  // Opcion 2

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

  fs.writeFileSync("./common/pokemons_x_departments_transformed.json", newData);
}

async function main() {
  try {
    await getData();
    transformData();
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
