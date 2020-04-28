var tanya = true;
while( tanya ){
    // menangkap pilihan dari player
    var p = prompt('Pilih : Gajah, Semut, Orang');


    // menangkap pilihan dari komputer
    // membangkitkan bilangan random
    var comp = Math.random();

    if( comp < 0.34 ){
        comp = 'Gajah';
    } else if ( comp >= 0.34 && comp < 0.67 ){
        comp = 'Orang';
    } else {
        comp = 'Semut';
    }

    console.log(comp);

    var hasil = '';
    // menentukan rules
    if( p == comp ){
        hasil = 'SERI';
    } else if ( p == 'Gajah' ){
        hasil = ( comp == 'Orang' ) ? 'MENANG!' : 'KALAH!';
    } else if ( p == 'Orang'){
        hasil = ( comp == 'Gajah' ) ? 'KALAH!'  : 'MENANG!';
    } else if ( p == 'Semut' ){
        hasil = ( comp == 'Orang' ) ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Jangan memasukkan pilihan yang salah!';
    }

    // tampilkan hasilnya
    alert('Kamu memilih: ' + p + ' dan komputer memilih: ' + comp + '\nMaka hasilnya adalah kamu: ' + hasil);

    tanya = confirm('Mau main lagi?');
}

alert('Terima kasih sudah bermain :)');
