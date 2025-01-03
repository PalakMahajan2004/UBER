const mongoose =require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minlength:[3, 'First name must be atleast 3 characters'],
        },
        lastName: {
            type: String,
            minLength: [3, 'Last name must be at least 3 characters'],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 character']
    },
    password:{
        type:String,
        required:true,
        select: false,
       
    },
//For live Tracking use Socket
    socketId:{
        type:String,
    }
})

//create methods 
userSchema.methods.generateAuthToken=  function(){
    const token = jwt.sign({_id: this._id},process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword =async function (password){
    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;