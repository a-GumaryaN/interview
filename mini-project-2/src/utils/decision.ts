import { signalModel, decisionModel } from "../db/db.schema";
import { SignalInterface } from "../types/interfaces";

const return_signal = (signal_number: string, signals: SignalInterface[]) => {

}

export const decision = async (): Promise<{ analyst: string, successDecision: number, failedDecision: number }> => {
    const signals = await signalModel.find(),
        decisions = await decisionModel.find();

    decisions.map(item => {

    })

}