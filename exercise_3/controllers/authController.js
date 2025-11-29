import User from "../models/User.js"
import { generateToken } from "../utils/generateToken.js"

// register new user 
export const register = async (req, res, next) => {
    try {
        let { name, email, password, role } = req.body

        email = email.toLowerCase()


        const exist = await User.findOne({ email })


        if (exist) {
          return  res.status(404).json('this email is already taken')
        }

        const user = await User.create({ name, email, password, role })

        const token = generateToken(user._id)

          res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });


    } catch (error) {
        next(error)
    }


}


// login
export const login =  async (req, res, next) => {
 try{

   let {email, password } = req.body

        email = email.toLowerCase()


        const user = await User.findOne({ email })


        if(!user || !(await user.comparePassword(password))){
         return res.status(401).json({message: "invalid email or password"})
        }


     

        const token = generateToken(user._id)

        res.json({token})

 }catch(err){
  next(err)
 }
}