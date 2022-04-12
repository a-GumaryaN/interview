import { GraphQLSchema } from "graphql";

import { query } from "./root-query";

export const graphqlSchema = new GraphQLSchema({
    query: query,
});
