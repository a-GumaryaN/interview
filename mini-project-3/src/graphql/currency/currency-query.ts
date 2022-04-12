import { GraphQLString } from "graphql";
import { currency_pair } from "./currency-schema";
import { currencyPairModel } from "../../db/db.schema";
import { getCurrencyPairValidate } from "../../utils/validator.schema";



const currencyQuery = {
    getCurrencyPair: {
        type: currency_pair,
        args: {
            currency_1: { type: GraphQLString },
            currency_2: { type: GraphQLString },
        },
        resolve: (parent: any, args: any) => {


            const validateResult = getCurrencyPairValidate({
                currency_1: null,
                currency_2: "asd",
            });

            if (validateResult !== true) return validateResult[0].message;

            const name = args.currency_1 + '/' + args.currency_2;

            const result = currencyPairModel.findOne({ name });

            return result;

        }
    }
};

export default currencyQuery;
