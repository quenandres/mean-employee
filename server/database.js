const mongoose = require('mongoose');

//const URI = 'mongodb://localhost/mean-crud';
const URI = 'mongodb://quenan:quenan2019@ds117858.mlab.com:17858/mean-employees-quenan-database';

mongoose.connect(URI)
    .then(db => console.log("DB is connected !"))
    .catch(err => console.log(err));

module.exports = mongoose;
