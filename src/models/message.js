import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
    SenderEmail:{ type: String, required: true},
    RecieverEmail:{ type: String, required: true },
    Message:String,
    Photo:String
});

const Message = model("messages", MessageSchema);
export {Message}
