import { Schema, model, models } from "mongoose";

const ThemeSchema = new Schema(
  {
    author: {
      type: String,
    },
    themename: {
      type: String,
    },
    text: {
      type: Schema.Types.Mixed,
    },
    time: {
      type: String,
    },
    comments: {
      type: Array,
      default: void 0,
    },
  },
  { strict: false }
);

const Theme = models.Theme || model("Theme", ThemeSchema);

export default Theme;
