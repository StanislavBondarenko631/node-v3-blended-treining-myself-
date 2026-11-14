import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      trim: true,
    },

    category: {
      type: String,

      enum: ['books', 'electronics', 'clothing', 'other'],
      required: true,
      default: 'other',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Product = model('Product', productSchema);
