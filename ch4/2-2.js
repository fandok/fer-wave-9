// contoh promise
const myPromise = new Promise((resolve) => resolve("Hello World"));

myPromise.then((result) => {
  console.log(result);
});

//  contoh promise dengan response
fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
  console.log(response);
});

// contoh promise resolve reject
function isPasswordCorrect(password) {
  return new Promise((resolve, reject) => {
    console.log("Password", password);
    password === "123456"
      ? resolve("Password is correct")
      : reject("Wrong Password");
  });
}

// isPasswordCorrect("123456")
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => console.error(reject));

// isPasswordCorrect("123455")
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => console.error(reject));

// contoh async await
let punyaBuku = false;

const beliBuku = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      punyaBuku = true;
      resolve();
    }, 1000);
  });

const gambar = (judul) =>
  punyaBuku
    ? Promise.resolve({ id: Date.now(), title: judul, createdAt: Date() })
    : Promise.reject("Gak punya buku");

async function main() {
  try {
    //   if (!punyaBuku) await beliBuku();
    const hasilGambar = await gambar("Doraemon");
    console.log(hasilGambar);
  } catch (err) {
    console.log("Beli buku dulu dong!");
  }
}

main();

// Link pokemon ditto
// https://pokeapi.co/api/v2/pokemon/ditto
