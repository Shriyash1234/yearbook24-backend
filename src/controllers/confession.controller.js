import {Confession} from "../models/confession.js";

export async function getConfessions(req, res) {
    
    try {
        const Confessions = await Confession.find({});
        return res.status(200).json({ Confessions });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}
