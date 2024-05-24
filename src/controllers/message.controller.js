import {Message} from "../models/message.js";

export async function getMessages(req, res) {
    const { studentEmail } = req.body;
    try {
        const Messages = await Message.find({ RecieverEmail: studentEmail });
        return res.status(200).json({ Messages });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}
