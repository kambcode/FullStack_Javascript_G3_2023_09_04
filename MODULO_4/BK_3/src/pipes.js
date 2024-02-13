// eventos -> metodo .on
// Readable -> data, end, error, close, readable
// Writable -> drain, finish, error, close

//Funciones
// Readable -> pipe, read, pause, setEncoding
// Writable -> write, end, cork, setDefaultEncoding, pipe

import fs from "fs";
import { Transform } from "stream";

function main() {
  const readableStream = fs.createReadStream("../common/streamFile.txt", {
    encoding: "utf-8",
  });

  const writableStream2 = fs.createWriteStream("../common/pipeStream.txt", {
    encoding: "utf-8",
  });

  const transformData = new Transform({
    transform(chunk, encoding, callback) {
      const newChunk = chunk.toString().toUpperCase();

      callback(null, newChunk);
    },
  });

  const transformData2 = new Transform({
    transform(chunk, encoding, callback) {
      const newChunk = chunk.toString().toLowerCase();

      callback(null, newChunk);
    },
  });

  readableStream
    .pipe(transformData)
    .pipe(transformData2)
    .pipe(transformData)
    .pipe(writableStream2);
}

//---------------------------//---------------------------//---------------------------
//        buffer (read)      //   Pipe (transform)        //        Pipe (write)
//---------------------------//---------------------------//---------------------------

main();
