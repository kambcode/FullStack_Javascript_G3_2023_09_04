// Stream -> Transmision = Streaming -> Netflix, Youtube

//---------------------------------------
//----------Buffer (Datos)---------------
//---------------------------------------

// Buffers -> Data

import fs from "fs";

function main() {
  const writableStream = fs.createWriteStream("../common/streamFile.txt", {
    encoding: "utf-8",
  });

  const data = "Hello world";

  writableStream.write(data);

  writableStream.end();

  const readableStream = fs.createReadStream("../common/streamFile.txt", {
    encoding: "utf-8",
  });

  const writableStream2 = fs.createWriteStream(
    "../common/anotherStreamFile.txt",
    {
      encoding: "utf-8",
    }
  );

  readableStream.on("data", (chunk) => {
    writableStream2.write(chunk);
  });

  readableStream.on("end", (chunk) => {
    writableStream2.end();
  });

  readableStream.on("error", (err) => {
    console.log("este error viene de lectura: ", err);
  });

  writableStream2.on("error", (err) => {
    console.log("este es el error:", err);
  });
}

main();
