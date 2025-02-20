import { GraphQLClient } from "graphql-request";

const HYGRAPH_URL = process.env.NEXT_PUBLIC_HYGRAPH_URL!;

export const hygraph = new GraphQLClient(HYGRAPH_URL);
