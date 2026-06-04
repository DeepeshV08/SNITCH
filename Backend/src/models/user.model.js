import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        unique: [true,"username must be unique."],
        required:[true,"Username is required."]
    },
    email:{
        type: String,
        unique: [true,"username must be unique."],
        required:[true,"Username is required."]
    },
    contact:{
        type:String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type:String,
        enum: ["buyer","seller"],
        default: "buyer"
    }
});

userSchema.pre('save', async function() {
    if (!this.isModified('password')) return;
    
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
})

userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const userModel = mongoose.model('user', userSchema);

export default userModel;