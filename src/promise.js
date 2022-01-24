const resultPromise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random()*10);
  setTimeout(
    () => (random > 5 ? resolve(random): reject(new Error("Error en la promesa!"))),
    2_000
  );
});
/* console.log(await resultPromise); */

/* resultPromise
  .then((number) => console.log(number))
  .catch((error) =>  console.log(error)); */

/* const testPromise = async () => {
  try {
    const response = await resultPromise;
    return response;
  } catch (error) {
    return error;
  }
}; */

//const testPromise = await resultPromise;

//console.log(await testPromise());
console.log(await resultPromise);

 
