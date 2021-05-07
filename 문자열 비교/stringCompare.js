const str1 = 'apple';
const str2 = 'apple';
const str3 = 'banana';

document.writeln(str1 === str2); // true
document.writeln(str1 == str2); // true
document.writeln(str2 === str3); // false
document.writeln(str2 == str3); // false

document.writeln('apple' > 'banana'); // false
document.writeln('apple' > 'abcd'); // true
document.writeln('apple' > 'a'); //true
document.writeln('apple' > 'Banana'); // true
document.writeln('apple' > '1'); // true