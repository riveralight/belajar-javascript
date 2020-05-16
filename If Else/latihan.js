var jumlahAngkot = 10,
    angkotBeroprasi = 6;

for( var angkot = 1; angkot <= jumlahAngkot; angkot++ ) {
    if( angkot <= angkotBeroprasi ) {
        console.log('Angkot no.' + angkot + ' beroperasi dengan baik');
    } else {
        console.log('Angkot no.' + angkot + ' sedang rusak berat');
    }
}