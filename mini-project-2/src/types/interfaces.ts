export interface SignalInterface {
    _id: string,
    signal_number: string,
    status: string,
}

export interface decisionInterface {
    _id: string,
    analyst: string,
    signal: string,
    analyst_decision: string,
}