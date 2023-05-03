import { connectToMongoDB } from "../../../../lib/mongodb";
import Theme from "../../../../models/theme";
import mongoose from "mongoose";

const handler = async (req, res) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    if (!req.body) {
      return res.status(400).json({ error: "Data is missing" });
    }

    const { author, text, themename } = req.body;
    const themeobj = {
      author: author,
      themename: themename,
      text: text,
      comments: [],
    };
    Theme.create(themeobj)
      .then((result) => {
        return res.status(201).json({
          success: true,
          themeobj,
        });
      })
      .catch((err) => {
        res.status(405).json({ error: err });
      });
  }
};

export default handler;
