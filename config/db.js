var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test:test@cluster0-7emjm.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true });
module.exports = mongoose;