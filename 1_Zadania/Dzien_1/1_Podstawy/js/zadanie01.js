function mathInfo() {
    var randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    if(randomNumber%2==0){
        console.log('Parzysta')
    }
    var dzielniki = '';
    for( var i = 1 ; i <= randomNumber; i++){
        if(randomNumber % i == 0){
            dzielniki = dzielniki + i + ',';
        }
    }
    dzielniki = dzielniki.slice(0, -1);
    console.log(dzielniki);
    var resztaZdzielenia = randomNumber % 5;
    console.log(Math.pow(randomNumber, resztaZdzielenia));}
mathInfo();

//to wywołanie ma spowodować wyświetlenie w konsoli informacji z zadania
mathInfo();
