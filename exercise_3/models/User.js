import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
})


// hash password
userSchema.pre('save', async function () {
if(!this.isModified("password")) return 

   const salt = await bcrypt.genSalt(10)

   this.password = await bcrypt.hash(this.password, salt)

})


// compare passwords
userSchema.methods.comparePassword = function(inputPassword){
return bcrypt.compare(inputPassword, this.password)
}


export default mongoose.model('User', userSchema)