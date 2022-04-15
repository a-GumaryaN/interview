import { expect } from "chai";
import { isAnalystExist, findSignal, change_analyst_info, scanDecisions } from "../../src/utils/decision";
import { decisionInterface, SignalInterface, analystInterface } from "../../src/types/interfaces";

const analyst_test: analystInterface[] = [
    {
        analyst: 'analyst1',
        success_decisions: 1,
        all_decisions: 2
    },
    {
        analyst: 'analyst2',
        success_decisions: 1,
        all_decisions: 2
    },
];

const signals: SignalInterface[] = [
    {
        _id: "1",
        signal_number: '123',
        status: 'target',
    }
]

const decisions: decisionInterface[] = [
    {
        _id: '1',
        analyst: 'analyst1',
        signal: '123',
        analyst_decision: 'target',
    }
];

describe('decisions module unit testing :', () => {
    describe('isAnalystExist function testing :', () => {
        it('should scan an analytic name into a array of analytics object and return true ', () => {
            expect(isAnalystExist('analyst1', analyst_test))
                .to.be.true;
        })
    });

    describe('findSignal function testing :', () => {
        it('should scan an signals array with a signal number and return signal if signal found ', () => {
            expect(findSignal('123', signals))
                .to.deep.equal({
                    _id: "1",
                    signal_number: '123',
                    status: 'target',
                })
        })
    });

    describe('findSignal function testing :', () => {
        it('should get an array of analyst information object and change all_decisions and success_decisions if needed', () => {
            change_analyst_info('analyst1', analyst_test, true);
            expect(analyst_test[0]).to.deep.equal({
                analyst: 'analyst1',
                success_decisions: 2,
                all_decisions: 3
            })
        })
    });

    describe('scanAnalyst function testing :', () => {
        it(`should get an array of decisions and signals and 
        return an array of analysts contain analyst name 
        ,success decisions and all decisions`, () => {
            const analysts: analystInterface[] = scanDecisions(decisions, signals);
            expect(analysts).to.deep.equal([{
                analyst: 'analyst1',
                success_decisions: 1,
                all_decisions: 1
            }]);
        })
    });
})