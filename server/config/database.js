 
var pgp = require('./pgpromise.js');
// See also: https://github.com/vitaly-t/pg-promise#initialization-options
  
// Database connection details;
var cn = {  
    host: 'ec2-52-44-235-121.compute-1.amazonaws.com', // 'localhost' is the default; ec2-52-44-235-121.compute-1.amazonaws.com
    port: 5432, // 5432 is the default;
    database: 'd72g8do6e3jqi9',
    user: 'absoukiuaqsihn',
    password: '3ffc752a37ef1f23431ef7097fa8c83908d1aeabb92b1f6b60fac17384c5cedc'
};        
// You can check for all default values in:
// https://github.com/brianc/node-postgres/blob/master/lib/defaults.js
var db = pgp(cn); // database instance;
module.exports = db;   
