import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
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
        required: false,
    },
    password:{
        type: String,
        required: function() {
            return !this.googleId; // Password is required if googleId is not present
        }
    },
    role:{
        type:String,
        enum: ["buyer","seller"],
        default: "buyer"
    },
    googleId:{
        type: String,
        required: false
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