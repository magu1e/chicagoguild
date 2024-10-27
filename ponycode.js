const punycode = require('punycode');

// Codificar un nombre de dominio internacionalizado
const domain = 'münchen.com';
const encoded = punycode.encode(domain);
console.log(encoded); // 'xn--mnchen-3ya'

// Decodificar de vuelta a su forma original
const decoded = punycode.decode(encoded);
console.log(decoded); // 'münchen.com'
