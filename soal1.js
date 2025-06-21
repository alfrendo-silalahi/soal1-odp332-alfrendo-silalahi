// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        resultOne = resultOne + numbers[i];
    }
}
console.log(resultOne);

const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        resultTwo = resultTwo + numbers[i];
    }
}
console.log(resultTwo);


// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree = students.map(el => el.toUpperCase());
console.log(resultThree);


// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];

const peopleWithAgeUp18 = people
    .filter(el => el.age > 18)
    .map(el => el.name);
console.log(peopleWithAgeUp18);

const peopleWithNameLengthUp5 = people
    .filter(el => el.name.length > 5)
console.log(peopleWithNameLengthUp5);

// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];

const totalPriceItems = items.reduce((total, item) => total + item.price, 0);
console.log(totalPriceItems);

//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];
const numbersWithNonDuplicateValue = [];
for (let i = 0; i < numbersThree.length; i++) {
    if (!numbersWithNonDuplicateValue.includes(numbersThree[i])) {
        numbersWithNonDuplicateValue.push(numbersThree[i]);
    }
}
console.log(numbersWithNonDuplicateValue)

// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];
const mostExpensiveProduct = products.sort((p1, p2) => p2.price - p1.price)[0].name;
console.log(mostExpensiveProduct);

// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
const wordsJoin = words.join(' ');
console.log(wordsJoin);


// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];
let count = 0;
const threeNames = [];
for (let i = 0; i < names.length; i++) {
    if (names[i].includes('a')) {
        threeNames.push(names[i]);
        count++;
        if (count === 3) {
            break;
        }
    }
}
console.log(threeNames)


// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter
const namesTwoTotalChar = namesTwo.reduce((totalChar, name) => totalChar + name.length, 0);
console.log(namesTwoTotalChar);

// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];
const peopleTwoNewFormatAgeUp21 = peopleTwo
    .filter(el => el.age > 21)
    .map(el => `${el.name} (${el.age})`)
console.log(peopleTwoNewFormatAgeUp21);

