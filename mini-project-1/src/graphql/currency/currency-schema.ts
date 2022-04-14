import { GraphQLString, GraphQLObjectType } from "graphql";
import { currencyPairInterface } from "../../types/currency";

export const currency_pair = new GraphQLObjectType<currencyPairInterface>({
  name: "currency_pair",
  fields: {
    error: { type: GraphQLString },
    name: { type: GraphQLString },
    OpenTime: { type: GraphQLString },
    Open: { type: GraphQLString },
    High: { type: GraphQLString },
    Low: { type: GraphQLString },
    Close: { type: GraphQLString },
    Volume: { type: GraphQLString },
  },
});