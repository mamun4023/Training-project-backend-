const {GraphQLObjectType, GraphQLList, GraphQLID, GraphQLInt} = require('graphql');
const { UserType, ProductType ,TransactionType} = require('./types');
const {client} = require('../models/db');
const {GraphQLString} = require('graphql')


const RootQuery = new GraphQLObjectType({
    name : "rootQuery",
    fields : {
        transactions : {
            type : new GraphQLList(TransactionType),
            args : {limit : {type : GraphQLID}, page : {type : GraphQLID}},
            async resolve(parent, args){    
                let Limit = (args.limit*1);
                let Offset = args.limit * (args.page-1)
                let data = await client.query(`SELECT * FROM transactions limit ${Limit} offset ${Offset}`)
                return data.rows
            }
        },
        transaction : {
            type : new GraphQLList(TransactionType),
            args : {id : {type : GraphQLID}},
            async resolve(parent, args){    
                let data = await client.query(`SELECT * FROM transactions WHERE id = ${args.id}`)
                return data.rows
            }
        },
        users : {
            type : new GraphQLList(UserType),
            args : {limit : {type : GraphQLID}, page : {type : GraphQLID}},
            async resolve(parent, args){    
                let Limit = (args.limit*1);
                let Offset = args.limit * (args.page-1)
                let data = await client.query(`SELECT * FROM users limit ${Limit} offset ${Offset}`)
                return data.rows
            },
        },
        user : {
            type : new GraphQLList(UserType),
            args : {id : {type : GraphQLID}},
            async resolve(parent, args){
                let user = await client.query(`SELECT * FROM users WHERE id=${args.id}`)
                return user.rows
            }
        },
        products: {
            type : new GraphQLList(ProductType),
            args : {limit : {type : GraphQLID}, page : {type : GraphQLID}},
            async resolve(parent, args){    
                let Limit = (args.limit*1);
                let Offset = args.limit * (args.page-1)
                let data = await client.query(`SELECT * FROM products limit ${Limit} offset ${Offset}`)
                return data.rows
            }
        },
        product : {
            type : new GraphQLList(ProductType),
            args : {id : {type : GraphQLID}},
            async resolve(parent, args){
                let product = await client.query(`SELECT * FROM products WHERE id = ${args.id}`)
                return product.rows
            }
        },
    }
})



module.exports =  RootQuery;