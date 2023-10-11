function countSortString(input) {

    const data = input.join("");
    const objChar = {};

    for(let i = 0; i < data.length; i++) {
        let char = data[i];
        if(objChar[char] === undefined) {
            objChar[char] = 1;
        } else {
            objChar[char] += 1;
        }
    }
    
    const sortObjChar = {};
    Object.keys(objChar).sort((a, b) => {
        if (objChar[b] === objChar[a]) {
        // Mengurutkan huruf kapital di atas huruf kecil jika jumlahnya sama
            return a < b ? -1 : a > b ? 1 : 0;
        }
        return objChar[b] - objChar[a];
    }).forEach((key) => {
        sortObjChar[key] = objChar[key];
    });
    // console.log(sortObjChar);

    const output = Object.keys(sortObjChar).join("");
    return output;
}

console.log(countSortString(["Abc", "bCd"]))
console.log(countSortString(["Oke", "One"]))
console.log(countSortString(["Pendanaan", "Terproteksi", "Untuk", "Dampak", "Berarti"]))