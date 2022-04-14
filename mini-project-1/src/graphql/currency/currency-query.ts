import { GraphQLList, GraphQLString } from "graphql";
import { currency_pair } from "./currency-schema";
import { currencyPairModel } from "../../db/db.schema";
import { getCurrencyPairValidate } from "../../utils/validator.schema";



const currencyQuery = {
    getLastCurrencyPair: {
        type: currency_pair,
        args: {
            currency_pair: { type: GraphQLString },
        },
        resolve: async (parent: any, args: any) => {

            const validateResult = getCurrencyPairValidate({
                currency_pair: args.currency_pair,
            });

            if (validateResult !== true) return validateResult[0].message;

            const result = await currencyPairModel.findOne({ name: args.currency_pair });

            console.log(result)

            return result;

        }
    },
    getAllCurrencyPair: {
        type:new GraphQLList(currency_pair),
        args: {
            currency_pair: { type: GraphQLString },
        },
        resolve: async (parent: any, args: any) => {

            const validateResult = getCurrencyPairValidate({
                currency_pair: args.currency_pair,
            });

            if (validateResult !== true) return validateResult[0].message;

            const result = await currencyPairModel.find({ name: args.currency_pair });

            console.log(result)

            return result;

        }
    }
};

export default currencyQuery;
