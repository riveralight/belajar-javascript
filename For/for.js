var angkot = 1;
var jumlahAngkot = 10;
var angkotBeroperasi = 3;

while(angkot <= angkotBeroperasi){
    console.log('Angkot nomor ' + angkot + ' beroperasi dengan baik');
    angkot++;
}

for(angkot = angkotBeroperasi + 1; angkot <= jumlahAngkot; angkot++){
    console.log('Angkot nomor ' +angkot+ ' sedang tidak beroperasi');
}