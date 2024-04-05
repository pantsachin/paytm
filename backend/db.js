const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sachin0196:57w6PGy8dMHGR31d@clusterforpaytm.pim7a3q.mongodb.net/?retryWrites=true&w=majority&appName=Clusterforpaytm');

const userSchema = new mongoose.Schema({
    username: String, 
    password: String, 
    firstName: String, 
    lastName: String
});

const User = mongoose.model('User', userSchema);

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    }, 
    balance: {
        type: Number, 
        required: true
    }
})

const Account = mongoose.model('Account', accountSchema)

model.exports = {
    User, 
    Account 
;}