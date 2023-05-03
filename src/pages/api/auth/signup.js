import { hash } from "bcryptjs";
import { connectToMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import mongoose from "mongoose";

const handler = async (req, res) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    if (!req.body) {
      return res.status(400).json({ error: "Data is missing" });
    }

    const { email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res
        .status(409)
        .json({ error: "Такой пользователь уже существует" });
    } else {
      if (password.length < 6)
        return res
          .status(409)
          .json({ error: "Пароль должен содержать более 6 символов" });

      const hashedPassword = await hash(password, 12);

      /*User.create(
        {
          email,
          password: hashedPassword,
        },
        (error, data) => {
          if (error && error instanceof mongoose.Error.ValidationError) {
            //mongo db will return array
            // but we only want to show one error at a time

            for (let field in error.errors) {
              const msg = error.errors[field].message;
              return res.status(409).json({ error: msg });
            }
          }

          const user = {
            email: data.email,
            _id: data._id,
          };

          return res.status(201).json({
            success: true,
            user,
          });
        }
      );*/
      User.create({ email: email, password: hashedPassword })
        .then((result) => {
          const user = {
            email: email,
            password: password,
            _id: 132132,
          };

          return res.status(201).json({
            success: true,
            user,
          });
        })
        .catch((err) => {
          res.status(405).json({ error: err });
        });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
