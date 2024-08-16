import User from "../../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const postRegister  = async (req,res) => {

    try{

        const { username, email, password } = req.body;

        const userExists = await User.exists({username})
        const emailExists = await User.exists({email})

        if(userExists){
            return res.status(409).send("User already exists.")
        }
        if(emailExists){
            return res.status(409).send("Email already exists.")
        }

        const encryptedPassword = await bcrypt.hash(password,3)

        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword
        })

        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: "1h"
            }
        )

        return res.status(201).json({
            message: "User Registered Successfully",
            userDetails: {
                email: user.email,
                username,
                token
            }
        })

    } catch (err) {
        console.log("Error : ",err)
        return res.status(500).send("Error occured. Please try again.")
    }
}

