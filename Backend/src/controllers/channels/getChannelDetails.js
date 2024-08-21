import User from "../../models/User.js"
import Channel from "../../models/Channel.js"

export const getChannelDetails = async (req,res) => {

    try {
        const { channelId } = req.params

        // console.log("gggg : ",channelId)

        const channel = await Channel.findById(channelId)

        if(!channel || !channel.isActive){
            return res.status(404).send("Channel not found")
        }

        const user = await User.findOne({channel: channelId}, {username: 1})
        const streamUrl = "https"
        const isOnline = false;

        return res.status(200).json({
            id: channel._id,
            title: channel.title,
            description: channel.description ,
            username: user.username,
            isOnline,
            streamUrl
        })
    } catch (err) {
        console.log(err)
        return res.status(500).send("Channel not found.")
    }    
}