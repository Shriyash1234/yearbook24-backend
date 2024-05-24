import {Profile} from "../models/student.profile.js";

export async function getStudentDetails(req, res) {
    const { studentEmail } = req.body;
    try {
        const profile = await Profile.findOne({ Email: studentEmail });
        if (!profile) {
            return res.status(404).json({ message: "Profile not found for the provided email" });
        }
        return res.status(200).json({ profile });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}
