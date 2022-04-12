import { GraphQLFloat, GraphQLObjectType, GraphQLString } from "graphql";
import { graphqlSchema } from "../graphql";

export const currency_pair = new GraphQLObjectType({
  name: "user",
  fields: {
    error: { type: GraphQLString },
    name: { type: GraphQLString },
    value: { type: GraphQLFloat },
  },
});