//Program Segitiga Looping
var s = '';

//Segitiga Rata Kiri
for (var i = 0; i < 5; i++) {
	for (var j = 0; j <= i; j++) {
		s += '*';
	}
	s += '\n';
}
console.log(s);


//Segitiga Terbalik Rata Kiri
for (var i = 5; i > 0; i--) {
	for (var j = 0; j < i; j++) {
		s += '*';
	}
	s += '\n';
}
console.log(s);


//Segitiga Rata Kanan
for (var i = 5; i >= 1; i--) {
	for (var j = 0; j < i; j++) {
		s += ' ';
	}
	for (var j = 5; j >= i; j--) {
		s += 'x';
	}
	s += '\n';
}
console.log(s);


//Segitiga Terbalik Rata Kanan
for (var i = 0; i < 5; i++) {
	for (var j = 1; j <= i; j++) {
		s += ' ';
	}
	for (var j = 4; j >= i; j--) {
		s += 'x';
	}
	s += '\n';
}
console.log(s);


//Segitiga Sama Kaki
for (var i = 1; i <= 5; i++) {
	for (var j = 4; j >= i; j--) {
		s += ' ';
	}
	for (var k = 1; k <= i; k++) {
		s += '*';
	}
	for (var l = 1; l <= i - 1; l++) {
		s += '*';
	}
	s += '\n';
}
console.log(s);

