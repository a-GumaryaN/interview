import { GraphQLObjectType, GraphQLString } from "graphql";
import currencyQuery from "./currency/currency-query";



export const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...currencyQuery,
  },
});
