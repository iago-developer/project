const mongoose = require('mongoose');

const Adms = mongoose.model('adms', {
 fullname: String,
 nameuser: String,
 password: String
});

module.exports = Adms;