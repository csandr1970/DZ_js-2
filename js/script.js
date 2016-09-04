var userName = [];
var logIn = 'Введите корректное имя, ';
// Переменную logIn переназначим в случае совпадения введенного имени 
// и избавимся от второй проверки

for ( i=0 ; i<5 ; i++ ) {
	userName[i] = prompt ('Введите имя ' + (i + 1), 'user name');
};

var userIn = prompt ('введите ваше имя', '');

for ( i=0 ; i<5 ; i++ ) {
	if ( userIn == userName[i] ) {
		logIn = 'Добро пожаловать, ';
		break;
	}
} 

alert( logIn + userIn + '!' );
