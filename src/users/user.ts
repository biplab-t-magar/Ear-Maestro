import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userId: String,
    userName: String,
    
})

mongoose.model('users', userSchema);