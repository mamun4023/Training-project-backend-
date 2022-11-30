const {GraphQLObjectType, GraphQLID, GraphQLString} = require('graphql')


const UserRegistrationType = new GraphQLObjectType({
    name : "RegisterType",
    fields : ()=> ({
        id : {type : GraphQLID},
        fullName : {type : GraphQLString},
        email : {type : GraphQLString},
        password : {type : GraphQLString},
    })
})



const UserType = new GraphQLObjectType({
    name : "userType",
    fields : ()=> ({
        id : {type : GraphQLID},
        firstName : {type : GraphQLString},
        lastName : {type : GraphQLString},
        image : {type : GraphQLString},
        age : {type : GraphQLString},
        birthDate : {type : GraphQLString},
        phone : {type : GraphQLString},
        email : {type : GraphQLString},
        bloodGroup : {type : GraphQLString}
    })
})

const ProductType = new GraphQLObjectType({
    name : "productType",
    fields : ()=> ({
        id : {type : GraphQLID},
        title : {type : GraphQLString},
        image : {type : GraphQLString},
        price : {type : GraphQLString},
        discount : {type : GraphQLString},
        rating : {type : GraphQLString},
        stock : {type : GraphQLString},
        brand : {type : GraphQLString},
        category : {type : GraphQLString}
    })
})

const TransactionType = new GraphQLObjectType({
    name : 'transaction_types',
    fields : ()=> ({
        id : {type : GraphQLID},
        tranc_id: {type : GraphQLString},
        productName : {type : GraphQLString},
        userName : {type : GraphQLString},
        amount : {type : GraphQLID},
        pay_method : {type : GraphQLString},
        status : {type : GraphQLString},
        date : {type : GraphQLString}
    })
})

module.exports = {
    UserRegistrationType,
    UserType,
    ProductType,
    TransactionType
}