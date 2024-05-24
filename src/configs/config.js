import MongoDBClient from "../data/mongodb.js";
import "mongoose";

export var mongoClient;

export function initConfig() {
  mongoClient = new MongoDBClient(process.env.MONGO_URI, "yearbook24");
}

export const Collections = {
  Profiles:"profiles",
  Messages:"messages",
  Confessions:"confessions"
};
