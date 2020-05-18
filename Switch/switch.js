// var angka = prompt('Masukkan angka :');

// switch( angka ) {
//     case '1' :
//         alert('Anda memasukkan angka 1');
//         break;
//     case '2' :
//         alert('Anda memasukkan angka 2');
//         break;
//     case '3' :
//         alert('Anda memasukkan angka 3');
//         break;
//     default :
//         alert('Angka yang anda masukkan salah');
//         break;

// }


var item = prompt('Masukkan nama makanan / minuman : \n (contoh: nasi, daging, susu, hamburger, softdrink)');

switch( item ) {
    case 'nasi' :
        alert('makanan / minuman SEHAT!');
        break;
    case 'daging' :
        alert('makanan / minuman SEHAT');
        break;
    case 'susu' :
        alert('makanan / minuman SEHAT');
        break;
    case 'hamburger' :
        alert('makanan / minuman TIDAK SEHAT');
        break;
    case 'softdrink' :
        alert('makanan / minuman TIDAK SEHAT');
        break;
    default :
        alert('Anda memasukkan makanan dan minuman yang salah');
        break;
}
