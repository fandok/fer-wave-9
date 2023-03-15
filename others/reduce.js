const pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

const petCounts = pets.reduce(function (obj, pet) {
  // tanda seru dipakai kalo mau tau sebuah value itu bernilai falsey
  //   if (!obj[pet]) {
  //     obj[pet] = 1;
  //   } else {
  //     obj[pet]++;
  //   }

  //   Alternatif lain
  if (obj[pet] === undefined) {
    obj[pet] = 1;
  } else {
    obj[pet] += 1;
  }

  return obj;
}, {});

console.log(petCounts);

const petCountsAlt = {};
pets.forEach((pet) => {
  if (!petCountsAlt[pet]) {
    petCountsAlt[pet] = 1;
  } else {
    petCountsAlt[pet] += 1;
  }
});

console.log("alt", petCountsAlt);

const counts = [1, 2, 3, 4, 5].reduce((previousValue, currentvalue) => {
  console.log("prev Value", previousValue);
  return previousValue + currentvalue;
}, 0);

console.log(counts);
