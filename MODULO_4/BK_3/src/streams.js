// Stream -> Transmision = Streaming -> Netflix, Youtube

//---------------------------------------
//----------Buffer (Datos)---------------
//---------------------------------------

// Buffers -> Data

import fs from "fs";

export function readFile(filePath) {
  const data = fs.readFileSync(filePath, "utf-8");

  return data;
}

export function createReadFileStream(filePath) {
  const fileStream = fs.createReadStream(filePath, {
    encoding: "utf-8",
    highWaterMark: 1024,
  });

  let data = "";

  fileStream.on("data", (chunk) => {
    data += chunk;
  });

  fileStream.on("end", () => {
    console.log("task Completed");
  });

  return data;
}

// const data = readFile("../common/pokemons_x_departments.json");

// console.log("data: ", data);

export function writeFile(filePath, data) {
  const fileStream = fs.createWriteStream(filePath);

  fileStream.write(data, "utf-8");

  fileStream.end();

  fileStream.on("finish", () => {
    console.log("file was created successfully");
  });
}
