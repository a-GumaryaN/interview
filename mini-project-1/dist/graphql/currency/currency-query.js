"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const currency_schema_1 = require("./currency-schema");
const db_schema_1 = require("../../db/db.schema");
const validator_schema_1 = require("../../utils/validator.schema");
const currencyQuery = {
    getLastCurrencyPair: {
        type: currency_schema_1.currency_pair,
        args: {
            currency_pair: { type: graphql_1.GraphQLString },
        },
        resolve: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            const validateResult = (0, validator_schema_1.getCurrencyPairValidate)({
                currency_pair: args.currency_pair,
            });
            if (validateResult !== true)
                return validateResult[0].message;
            const result = yield db_schema_1.currencyPairModel.findOne({ name: args.currency_pair });
            console.log(result);
            return result;
        })
    },
    getAllCurrencyPair: {
        type: new graphql_1.GraphQLList(currency_schema_1.currency_pair),
        args: {
            currency_pair: { type: graphql_1.GraphQLString },
        },
        resolve: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            const validateResult = (0, validator_schema_1.getCurrencyPairValidate)({
                currency_pair: args.currency_pair,
            });
            if (validateResult !== true)
                return validateResult[0].message;
            const result = yield db_schema_1.currencyPairModel.find({ name: args.currency_pair });
            console.log(result);
            return result;
        })
    }
};
exports.default = currencyQuery;
