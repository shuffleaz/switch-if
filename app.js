var menimYasim = 28;
var yoxlaButtonu = document.getElementById('yoxla');


yoxlaButtonu.addEventListener('click', function() {
    var yas = document.getElementById('yas').value;
    var netice = document.getElementById('netice');

    if(yas == menimYasim && yas == isNaN || yas == null) {
       netice.innerHTML = "Duzgun cavabdir!";
    } else if(yas == '') {
       netice.innerHTML = "Bos qala bilmez!";
    } else if(yas > 30) {
        netice.innerHTML = "Həddind artıq uzaqlaşdınız";
    } else if(yas < 8) {
       netice.innerHTML = "Çox kiçik bir rəqəm seçdiniz";
    } else {
       netice.innerHTML = "Duzgun cavab deyil!";
    }

    // String, Number, Boolean
    switch (yas) {
        case '28':
            netice.innerHTML = "Düzgün cavabdır";
        break;
        
        case '':
            netice.innerHTML = "Bos qala bilmez!";
        break;

        default:
            netice.innerHTML = "Duzgun cavab deyil!";
    }
});


var alphabet = 'A';

switch (alphabet) {
    case 'A':
        alert('Herfi duzgundur!');
    break;
    case 'B':
        alert('Herfi sehvdir!');
    break;
    case 'C':
        alert('Herfi sehvdir!');
    break;
    case 'D':
        alert('Herfi sehvdir!');
    break;
    case 'E':
        alert('Herfi sehvdir!');
    break;
    case 'F':
        alert('Herfi sehvdir!');
    break;
    case 'G':
        alert('Herfi sehvdir!');
    break;
}

if(alphabet == "A") {
    alert('Herfi duzgundur!');
} else if(alphabet = 'B') {
    alert('Herfi sehvdir!');
} else if(alphabet = 'B') {
    alert('Herfi sehvdir!');
}else if(alphabet = 'B') {
    alert('Herfi sehvdir!');
}else if(alphabet = 'B') {
    alert('Herfi sehvdir!');
}else if(alphabet = 'B') {
    alert('Herfi sehvdir!');
}else if(alphabet = 'B') {
    alert('Herfi sehvdir!');
}else if(alphabet = 'B') {
    alert('Herfi sehvdir!');
}else if(alphabet = 'B') {
    alert('Herfi sehvdir!');
}




