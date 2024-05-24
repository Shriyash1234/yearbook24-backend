import { Schema, model } from "mongoose";

const ProfileSchema = new Schema({
    Email:{ type: String, required: true, unique: true },
    Name:{ type: String, required: true },
    Profile_Biography:String,
    Profile_Pic:String,
    Profile_Pic_Old:String
});

const Profile = model("profiles", ProfileSchema);
export {Profile}
