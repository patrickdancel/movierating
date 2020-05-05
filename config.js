const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movie', {useNewUrlParser: true, useUnifiedTopology:true});
