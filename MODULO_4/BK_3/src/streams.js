// Stream -> Transmision = Streaming -> Netflix, Youtube

//---------------------------------------
//----------Buffer (Datos)---------------
//---------------------------------------

// Buffers -> Data

import fs from "fs";

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

export function createWriteFileStream(filePath, data) {
  const fileStream = fs.createWriteStream(filePath);

  fileStream.write(data, "utf-8");

  fileStream.end();

  fileStream.on("finish", () => {
    console.log("file was created successfully");
  });
}
