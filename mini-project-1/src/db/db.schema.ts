import { Schema, model } from "mongoose";
import { currencyPairInterface } from "../types/currency";

const currencyPairSchema = new Schema<currencyPairInterface>({
    _id: { type: String },
    name: { type: String, required: true },
    OpenTime: { type: String },
    Open: { type: String },
    High: { type: String },
    Low: { type: String },
    Close: { type: String },
    Volume: { type: String },
});

export const currencyPairModel = model('currency_pair', currencyPairSchema);

// {
//     a: 1141264289,
//     p: '41320.11000000',
//     q: '0.14520000',
//     f: 1325438887,
//     l: 1325438887,
//     T: 1649889355606,
//     m: false,
//     M: true
//   },
