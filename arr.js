let str = "semarang";
let arr = ["f", "o", "s", "a", "n"];
let container = [
    "bola",
    123,
    true,
    false,
    [
        "sepatu",
        2500,
        [
            [
                "jerami", 
                "jarum"
            ],
            "domba"
        ]
    ],
    { nama: "rijal", umur: 19 },
];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

function hitung(params, indeks) {
  // console.log(params);
  return params[indeks];
}
// console.log(hitung(["f", "o", "s", "a", "n"]));
// // hitung([1,2,3])

// console.log(container[4][2][0][0][1], container[4][2][0][1][1]);
// console.log(container.length);

// hitung(["f", "o", "s", "a", "n"], 2)
// console.log(container[container.length - 1].nama[0]);

let arr2 = [1, 9, 3, 11]
// push: menambah 1 nilai ke array ke index paling belakang
arr2.push([4, 12, 23, 22], {nama: 'rijal'}, function hitung(params) {
    return params
})
// pop: menghapus 1 nilai dari array index paling belakang
arr2.pop()
arr2.pop()
// unshift: menambah 1 nilai ke array index paling depan (index 0)
arr2.unshift([9, 103], "string", true)
// shift: menghapus 1 nilai dari array index paling depan (index 0)
arr2.shift()
arr2.shift()
// join: menggabungkan seluruh element array menjadi sebuah string dan mengambil parameter sebagai simbol penyambung antar elemen
let penampung = arr2.join()
console.log(penampung);
// if (a === 2) {
//     b + 1
// } else {
//     b - 1
// }

// let hasil = a === 2 ? b + 1 : a === 3 ? b + 2 : b - 2
// sort: mengurutkan elemen di dalam array sesuai alphabet
arr2.sort((a, b) => a - b)
// slice: mengambil beberapa lapis data
let a = arr2.slice(-5, -4)
let b = arr2.slice(-2, arr2.length - 1)
// splice: mengubah nilai array dengan menghapus dan/atau menambah nilai baru ke array
let c = arr2.splice(-2, 2)
arr2.splice(1, 2, ["semarang"])
// split: memecah string dan mengembalikan array sesuai dengan separator / pemisah yang didefinisikan
let pecah = penampung.split(",")
console.log(pecah);


// console.log(arr2[arr2.length]("aku"));
console.log(arr2);
// console.log(a);
// console.log(b);
// console.log(c);


