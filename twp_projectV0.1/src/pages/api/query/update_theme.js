import { connectToMongoDB } from "../../../../lib/mongodb";
import Theme from "../../../../models/theme";
import mongoose from "mongoose";

const handler = async (req, res) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    const { id, text, author } = req.body;

    try {
      await connectToMongoDB();

      const obj = await Theme.find({ _id: id }).distinct("comments");
      const aue = await Theme.updateOne(
        { _id: id },
        {
          $set: {
            comments: [...obj, { text: text, author: author }],
          },
        },
        { strict: false }
      ).then((result, err) => {
        return res.status(200).json({
          data: result,
          message: "Value Updated",
          message2: obj,
        });
      });
    } catch (error) {
      res.status(400).send({ error, msg: "something wrong" });
    }
  }
};

export default handler;
