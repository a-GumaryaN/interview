"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currency_pair = void 0;
const graphql_1 = require("graphql");
exports.currency_pair = new graphql_1.GraphQLObjectType({
    name: "currency_pair",
    fields: {
        error: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        OpenTime: { type: graphql_1.GraphQLString },
        Open: { type: graphql_1.GraphQLString },
        High: { type: graphql_1.GraphQLString },
        Low: { type: graphql_1.GraphQLString },
        Close: { type: graphql_1.GraphQLString },
        Volume: { type: graphql_1.GraphQLString },
    },
});
