

let nama = [4, 1, 10, 5, "adit", [1,2,3]];
// console.log(typeof nama[4]);
// nama = ['joko', ...nama]
// nama = [...nama, 'doni']
// console.log(nama[4][1]);
// nama[0] = 7;
// console.log(nama.push('doni'));
// console.log(nama.pop());
// console.log(nama);
let hasil = 0;
for (let i = 0; i < nama.length; i++) {
   
   if (typeof nama[i] === "object") {
    for (let j = 0; j < nama [i].length; j++ ){
        hasil += nama[i][j]
    }
   } else if(typeof nama[i] === "number") 
    {
        hasil += nama[i]
    } 

}
console.log(hasil);