alert('Selamat Datang!');
var lagi = true;

while( lagi ) 
{
    var nama = prompt('Masukkan nama:');
    alert('Halo, ' +nama);

    lagi = confirm('coba lagi?');
}

alert('Terima kasih');
