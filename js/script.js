var userName = [];
var logIn = false;

for ( i=0 ; i<5 ; i++ ) {
	userName[i] = prompt ('Введите имя ' + (i + 1), 'user name');
};
console.log(userName);
 
 var userIn = prompt ('введите ваше имя', '');
 
for ( i=0 ; i<5 ; i++ ) {
 	if ( userIn == userName[i] ) {
 		alert('Добро пожаловать, ' + userIn + '!');
 		logIn = true;
 		break;
 		}
 } 
 if (!logIn) {
alert('Введите корректное имя!');
 	}
