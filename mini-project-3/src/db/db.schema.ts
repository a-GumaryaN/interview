import { Schema, model } from "mongoose";
import { currencyPairInterface } from "../types/currency";

const currencyPairSchema = new Schema({
    _id: { type: String },
    name: { type: String, required: true },
    value: { type: String, required: true }
});

export const currencyPairModel = model('currencyPair', currencyPairSchema);