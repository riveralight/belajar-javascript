function tambah()
{
    var hasil = 0
    for(var i = 0; i < arguments.length; i++){
        hasil += arguments[i]; 
    }

    return hasil;
}

var coba = tambah(4, 5, 3);
console.log(coba);