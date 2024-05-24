import mongoose from "mongoose";

const { connect, connection } = mongoose;

class MongoDBClient {
  constructor(url, dbName) {
    this.url = url;
    this.dbName = dbName;
    this.connect();
  }

  async connect() {
    try {
      connect(this.url)
      connection.on("error", (error) => {
        console.error("Error connecting to MongoDB:", error);
      });
      connection.on("connected", () => {
        console.log(`Connected to MongoDB`);
      });
      connection.on("disconnected", () => {
        console.log("Disconnected from MongoDB");
      });
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }

  async disconnect() {
    try {
      await this.client.close();
      console.log("Disconnected from MongoDB");
    } catch (error) {
      console.error("Error disconnecting from MongoDB:", error);
    }
  }

  async insertOne(collectionName, document) {
    try {
      const result = await this.db
        .collection(collectionName)
        .insertOne(document);
      return result.ops[0];
    } catch (error) {
      console.error("Error inserting document:", error);
      throw error;
    }
  }

  async findOne(collectionName, query) {
    try {
      return await this.db.collection(collectionName).findOne(query);
    } catch (error) {
      console.error("Error finding document:", error);
      throw error;
    }
  }

  async updateOne(collectionName, filter, update) {
    try {
      const result = await this.db
        .collection(collectionName)
        .updateOne(filter, { $set: update });
      return result.modifiedCount > 0;
    } catch (error) {
      console.error("Error updating document:", error);
      throw error;
    }
  }

  async deleteOne(collectionName, filter) {
    try {
      const result = await this.db.collection(collectionName).deleteOne(filter);
      return result.deletedCount > 0;
    } catch (error) {
      console.error("Error deleting document:", error);
      throw error;
    }
  }

  async aggregate(collectionName, pipeline) {
    try {
      return await this.db
        .collection(collectionName)
        .aggregate(pipeline)
        .toArray();
    } catch (error) {
      console.error("Error aggregating documents:", error);
      throw error;
    }
  }
}

export default MongoDBClient;
