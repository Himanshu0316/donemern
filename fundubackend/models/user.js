const mongoose = require("mongoose");

const jwt = require('jsonwebtoken');
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        
      },
      lastname: {
        type: String,
        
      },
      email: {
        type: String,
        
      },
      password: {
        type: String,
        
      },
});
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this.id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"})
    return token
}
const User = mongoose.model("user",userSchema);

const validate = (data)=>{
    const Schema = Joi.object({
        name:Joi.string().required().label("name"),
        lastname:Joi.string().required().label("lastname"),
        email:Joi.string().required().label("email"),
        password:passwordComplexity().required().label("password"),
    });
    return Schema.validate(data);
}

module.exports = {User,validate};