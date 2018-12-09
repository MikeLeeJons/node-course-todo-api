const jwt = require('jsonwebtoken');

let data = {
  id: 10
}

let token = jwt.sign(data, 'lol')
console.log(token);

let decoded = jwt.verify(token, 'lol')
console.log('decoded', decoded);