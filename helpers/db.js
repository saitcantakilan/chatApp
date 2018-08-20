const mongoose = require('mongoose');

module.exports= () => {
    mongoose.connect(process.env.DB_STRING,{ useNewUrlParser: true });
    mongoose.connection.on('open',() =>{
        //console.log("MongoDB Bağlantısı Sağlandı");
    });
    mongoose.connection.on('error',(err) =>{
        console.log("MongoDB : ERROR!", err);
    });

    mongoose.Promise = global.Promise;
};