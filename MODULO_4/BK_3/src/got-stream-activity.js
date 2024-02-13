import got from "got";
import fs from "fs";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=1302";
const FILE_PATH = "../common/gotPokemon.json";

const getPokemonStreamData = (filePath, url) => {
  const fileStream = fs.createWriteStream(filePath, { encoding: "utf-8" });

  // Readable = highwatermark

  got
    .stream(url)
    .on("data", (chunk) => {
      console.log("chunk -----------> ", chunk.toString());
    })
    .on("end", () => {
      console.log("response ended");
    })
    .pipe(fileStream);
};

getPokemonStreamData(FILE_PATH, API_URL);
