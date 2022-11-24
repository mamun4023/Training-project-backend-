const {GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID} = require('graphql');
const { client } = require('../models/db');
const {UserType, ProductType, TransactionType} = require('./types');


const Mutation = new GraphQLObjectType({
    name : 'mutaion',
    fields : {
        addUser : {
            type : UserType,
            args : {
                firstName :  {type : new GraphQLNonNull(GraphQLString)},
                lastName :  {type : new GraphQLNonNull(GraphQLString)},
                image :  {type : new GraphQLNonNull(GraphQLString)},
                lastName :  {type : new GraphQLNonNull(GraphQLString)},
                age :  {type : new GraphQLNonNull(GraphQLString)},
                gender :  {type : new GraphQLNonNull(GraphQLString)},
                email :  {type : new GraphQLNonNull(GraphQLString)},
                phone :  {type : new GraphQLNonNull(GraphQLString)},
                birthDate :  {type : new GraphQLNonNull(GraphQLString)},
                bloodGroup :  {type : new GraphQLNonNull(GraphQLString)},
            },
           async resolve(parent, args){
                let user = await client.query(`INSERT INTO "user" values('${args.firstName}', '${args.lastName}', '${args.image}', '${args.age}', '${args.gender}', '${args.email}', '${args.phone}', '${args.birthDate}', '${args.bloodGroup}' )`)
                return user.rows
               
            }
        },
        removeUser : {
            type : UserType,
            args : {id : {type : GraphQLID}},
            async resolve(parent, args){
                let user = await client.query(`DELETE FROM user WHERE id=${args.id}`)
                return user.rows
            }
        }
    }
})





module.exports = Mutation;