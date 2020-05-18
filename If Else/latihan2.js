var jumlahAngkot = 10,
    angkotBeroprasi = 5;

for( var angkot = 1; angkot <= jumlahAngkot; angkot++ ) {
    if( angkot <= angkotBeroprasi ) {
        console.log('Angkot no.' + angkot + ' beroperasi dengan baik');
    } else if(angkot == 8) {
        console.log('Angkot no.' + angkot + ' sedang lembur');
    } else {
        console.log('Angkot no.' + angkot + ' sedang tidak beroperasi');
    }
}