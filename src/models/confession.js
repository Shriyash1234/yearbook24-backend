import { Schema, model } from "mongoose";

const ConfessionSchema = new Schema({
    Message:String
});

const Confession = model("confessions", ConfessionSchema);
export {Confession}
