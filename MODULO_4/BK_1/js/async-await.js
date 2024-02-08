//async await - operaciones asincronas

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("second world");
      resolve("resolved");
    }, 5000);
  });
}

async function getData() {
  console.log("hello world");
  await resolveAfter2Seconds();
  await resolveAfter2Seconds();

  await Promise.all([resolveAfter2Seconds(), resolveAfter2Seconds()]);
}

getData();

/*


                2   4       7 
            1           6 -    9
                3   5       8

tiempo:     0   2   2   5   3  4

*/
