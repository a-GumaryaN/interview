"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const graphql_1 = require("graphql");
const currency_query_1 = require("./currency/currency-query");
exports.query = new graphql_1.GraphQLObjectType({
    name: "Query",
    fields: Object.assign({}, currency_query_1.default),
});
