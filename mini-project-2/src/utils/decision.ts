import { signalModel, decisionModel } from "../db/db.schema";
import { SignalInterface, analystInterface, decisionInterface } from "../types/interfaces";

export const isAnalystExist = (analyst: string, analysts: analystInterface[]): boolean => {
    let result: boolean = false;
    analysts.map(item => {
        if (item.analyst === analyst) result = true;
    });
    return result;
}

export const findSignal = (signal_number: string, signals: SignalInterface[]): SignalInterface | boolean => {
    let result: boolean | SignalInterface = false;
    signals.map(item => {
        if (item.signal_number === signal_number) result = item;
    });
    return result;
}

export const change_analyst_info = (analyst: string, analysts: analystInterface[], isSuccess: boolean) => {
    analysts.map(item => {
        if (item.analyst === analyst) {
            item.all_decisions += 1;
            item.success_decisions += (isSuccess ? 1 : 0);
            return;
        }
    });
}

export const scanDecisions = (
    decisions: decisionInterface[],
    signals: SignalInterface[]
) => {

    const analysts: analystInterface[] = [];

    decisions.map(decision => {

        let signal: SignalInterface | boolean = findSignal(decision.signal, signals);

        if (typeof (signal) === 'object' && signal.status !== 'open') {

            if (!isAnalystExist(decision.analyst, analysts)) {

                if (signal.status === decision.analyst_decision) {
                    analysts.push({
                        analyst: decision.analyst,
                        success_decisions: 1,
                        all_decisions: 1
                    });
                } else {
                    analysts.push({
                        analyst: decision.analyst,
                        success_decisions: 0,
                        all_decisions: 1
                    });
                }

            } else {

                if (signal.status === decision.analyst_decision) {
                    change_analyst_info(decision.analyst, analysts, true);
                } else {
                    change_analyst_info(decision.analyst, analysts, false);
                }

            }
        }

    });

    return analysts;
}


export const getAndScanAnalyst = async (): Promise<analystInterface[]> => {

    const signals: SignalInterface[] = await signalModel.find();

    const decisions: decisionInterface[] = await decisionModel.find();

    const analysts: analystInterface[] = scanDecisions(decisions, signals);

    return analysts;

}