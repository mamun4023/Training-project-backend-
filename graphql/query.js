const {GraphQLObjectType, GraphQLList} = require('graphql');
const { UserType, ProductType ,TransactionType} = require('./types');

const TransactionData = require('./jsonData/transaction.json')
const UserData = require('./jsonData/user.json');
const ProductData = require('./jsonData/product.json');

const RootQuery = new GraphQLObjectType({
    name : "rootQuery",
    fields : {
        transactionList : {
            type : new GraphQLList(TransactionType),
            resolve(parent, args){
                return TransactionData
            }
        },
        userList : {
            type : new GraphQLList(UserType),
            resolve(parent, args){
                return UserData
            }
        },
        productList: {
            type : new GraphQLList(ProductType),
            resolve(parent, args){
                return ProductData
            }
        }
    }
})



module.exports =  RootQuery;