import User from "../../models/User.js"

export const postRegister  = async (req,res) => {

    const user = await User.create({
        username: "Senpai",
        email: "senpai.test@gmail.com",
        password: "ninja"
    })

    return res.send("User has be added to database ")
}

