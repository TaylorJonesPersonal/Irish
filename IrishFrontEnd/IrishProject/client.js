import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const httpLink = new HttpLink({
    uri: "http://ec2-18-118-135-142.us-east-2.compute.amazonaws.com:8080/graphql",
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([httpLink]),
});
