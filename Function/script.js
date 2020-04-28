function JumlahVolumeDuaKubus(a, b)
{
    var total, volumeA, volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

alert(JumlahVolumeDuaKubus(5,3));
alert(JumlahVolumeDuaKubus(10,5));