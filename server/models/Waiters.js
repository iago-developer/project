const mongoose = require('mongoose');

const Waiters = mongoose.model('waiters', {
 fullname: String,
 nameuser: String,
 password: String
});

module.exports = Waiters;