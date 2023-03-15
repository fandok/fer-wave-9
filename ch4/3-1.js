// 100, 1000, 1000000

const strToCurrIDR_2 = (strnum) => {
  let strlen = strnum.length;
  let idr = "";

  //   strnum = 1000000

  while (strlen > 3) {
    idr = strnum.slice(strlen - 3, strlen) + "." + idr;
    strlen -= 3;

    console.log(idr);
    console.log(strlen);
  }

  if (strlen > 0) {
    idr = strnum.slice(0, strlen) + "." + idr;
  }

  console.log("idr akhir", idr);

  return `Rp ${idr.slice(0, idr.length - 1)}`;
};

console.log(strToCurrIDR_2("1000000"));

async function fetchPokemonNew() {}

const fetchPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditt");
    const responseJson = await response.json();
    console.log("Ditto move: " + responseJson.moves[0].move.name);
  } catch (error) {
    console.log("terjadi error");
    console.error(error.message);
  }
};

fetchPokemon();

fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(async (response) => {
  const responseJson = await response.json();
  console.log(responseJson);
});
