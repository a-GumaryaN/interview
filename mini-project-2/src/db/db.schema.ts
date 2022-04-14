import { Schema, model } from "mongoose";
import { SignalInterface, decisionInterface } from "../types/interfaces";

const signalSchema = new Schema<SignalInterface>({
    _id: { type: String, required: true },
    signal_number: { type: String, required: true },
    status: { type: String, required: true },
});

const decisionSchema = new Schema<decisionInterface>({
    _id: { type: String, required: true },
    analyst: { type: String, required: true },
    signal: { type: String, required: true },
    analyst_decision: { type: String, required: true },
});

export const decisionModel = model('decision', decisionSchema);

export const signalModel = model('signal', signalSchema);