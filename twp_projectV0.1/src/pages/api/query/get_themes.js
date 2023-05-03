import { connectToMongoDB } from "../../../../lib/mongodb";
import Theme from "../../../../models/theme";
import mongoose from "mongoose";

const handler = async (req, res) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "GET") {
    try {
      await connectToMongoDB();
      const themes = await Theme.find();
      res.status(200).send(themes);
    } catch (error) {
      res.status(400).send({ error, msg: "something wrong" });
    }
  }
};

export default handler;
