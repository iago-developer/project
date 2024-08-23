const mongoose = require('mongoose');

const Cooks = mongoose.model('cooks', {
 fullname: String,
 nameuser: String,
 password: String
});

module.exports = Cooks;