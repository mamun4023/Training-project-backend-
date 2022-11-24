const {GraphQLSchema} = require('graphql');
const RootQuery = require('./query');
const Mutations = require('./mutation');


const Schema = new GraphQLSchema({
    query : RootQuery,
    mutation : Mutations
})


module.exports = Schema;