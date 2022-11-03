const mongoose = require('mongoose');
//creating database
const urldatabase = 'mongodb+srv://User1:fxxnddLB7tILHGlN@cluster0.gcyhqsx.mongodb.net/appartmentInfo?retryWrites=true&w=majority'
mongoose.connect(urldatabase, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}).then(() => {
    console.log("conection sucessful to database");
}).catch((e) => {
    console.log('not connected' + e);
})


