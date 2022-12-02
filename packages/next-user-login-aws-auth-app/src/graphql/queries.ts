/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

// user by ID
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      description
      image
      createdAt
      updatedAt
    }
  }
`;
// ALL users
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
