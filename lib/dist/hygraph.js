"use strict";
exports.__esModule = true;
exports.hygraph = void 0;
var graphql_request_1 = require("graphql-request");
var HYGRAPH_URL = process.env.NEXT_PUBLIC_HYGRAPH_URL;
exports.hygraph = new graphql_request_1.GraphQLClient(HYGRAPH_URL);
