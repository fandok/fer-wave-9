const no_telp = "021 255 323";
const updated_no_telp = no_telp.replace(" ", "_");

console.log(updated_no_telp);

const url_binar = "https://binaracademy.com";
const updated_url_binar = url_binar.substring(8, url_binar.length - 4);

console.log("----");
console.log(updated_url_binar);

const frontend = "FrOnt enD";

console.log("----");
console.log(frontend.toLowerCase());
console.log(frontend.toUpperCase());

const nama_dari_user_input = "        Sabrina Binar        ";
const validasi_nama_user = nama_dari_user_input.trim();

console.log("------");
console.log(nama_dari_user_input.trimStart());
console.log(nama_dari_user_input.trimEnd());
console.log(validasi_nama_user);

const data = [5, 3, 9, 2, 8];
data.sort((a, b) => b - a);
console.log(data);

const rows = [
  {
    id: 1,
    name: "Sabrina",
    age: 36,
    is_manager: true,
    start_date: "02-28-2019",
  },
  {
    id: 2,
    name: "Gun",
    age: 40,
    is_manager: true,
    start_date: "03-05-2017",
  },
  {
    id: 3,
    name: "Jimi Jamet",
    age: 39,
    is_manager: false,
    start_date: "07-12-2021",
  },
];

const newRows = rows
  .filter((row) => row.age > 37)
  .map((row) => {
    return row.name;
  });

console.log(newRows);

rows.sort((a, b) => {
  const startDate = new Date(a.start_date).getTime();
  const endDate = new Date(b.start_date).getTime();
  return startDate - endDate;
});

// ngurut number a-b, b-a || ngurut string a.localeCompare(b) b.localeCompare(a) || date

console.log(rows);

// Create our number formatter.
const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

console.log(formatter.format(2500)); /* $2,500.00 */

const kalimat = "Aku sedang searching belajar algorithm";
// includes, indexOf, search
const indeks = kalimat.search(/BeLajar/i);
console.log(indeks);

const array = [10, 5, "Hai", 4, 1];

console.log(
  array.filter((value) => {
    return value % 2 === 0;
  })
);

console.log(
  rows.filter((data) => {
    return data.name.search(/G/) > -1;
  })
);

const angka = [1, 2, 3, 4, 5];

let totalAngka = 0;
angka.forEach((value) => {
  totalAngka = totalAngka + value;
});

console.log("total angka", totalAngka);

let totalAngka2 = angka.reduce((totalSementara, value) => {
  return totalSementara + value;
});

console.log("total angka baru", totalAngka2);
