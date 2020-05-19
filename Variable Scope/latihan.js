// global scope / window scope
// window = objek paling luar dalam browser kita
var a = 1;

function test() {
    // didalam function dapat mengakses variabel diluar function
    var b = 2;
    console.log(a)
}

test();
