function helloWorld (lang) {
  if (lang == 'fr'){
    return 'bonjopupiut';
  } else if (lang == 'es') {
    return 'Hola';
}   else {
    return 'Hello, World';
  }
}

console.log (helloWorld('en'));
console.log (helloWorld('fr'));
console.log (helloWorld('es'));
