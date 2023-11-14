console.log("First Log");

function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Operation 1 Completed");
      resolve("Result from Async Operation 1");
    }, 2000);
  });
}

console.log("Second Log");

function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Operation 2 Completed");
      resolve("Result from Async Operation 2");
    }, 1000);
  });
}

asyncOperation1()
  .then((result1) => {
    console.log(result1);
    return asyncOperation2();
  })
  .then((result2) => {
    console.log(result2);
  });

console.log("End Log");
