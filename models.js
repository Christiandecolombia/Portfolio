
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DATABASENAME', {useNewUrlParser: true});

////THIS IS THE MAIN SCHEMA OTHERS WIL BE NAMED DIFFRENT, BUT BE NESTED IN THIS ONE

const DBCollectionSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength:[3,"Must be 3 letters"]},
    price: {type: String, required: true},
    image: {type: String, required: true},
}, {timestamps:true});  

/// SINCE OTHERS WILL BE NESTED HERE, KEEP THE EXPOR THE SAME

 module.exports = mongoose.model('DBCollection', DBCollectionSchema)