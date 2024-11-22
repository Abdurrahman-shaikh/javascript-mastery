const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("task async is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("resolve exicuted");
});

new Promise((resolve, reject) => {
  console.log("task async is completed !");
  resolve();
}, 1000).then(() => {
  console.log("completed!");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "azmi", email: "azmi@gmail.com" });
  }, 1000);
}).then((data) => {
  console.log(data);
})

new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "shifa", password: "123" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000)
}).then((data) => {
  console.log(data);
  return data.username;
}).then((user) => {
  console.log(user);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log("The promise is either resolved or rejected");
})
