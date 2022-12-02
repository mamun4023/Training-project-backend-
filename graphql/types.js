const {GraphQLObjectType, GraphQLID, GraphQLString} = require('graphql')

const SignupType = new GraphQLObjectType({
    name : "SignupType",
    fields : ()=> ({
        message : {type : GraphQLString},
        token : {type : GraphQLString},
    })
})

const LoginType = new GraphQLObjectType({
    name : "LoginType",
    fields : ()=> ({
        message : {type : GraphQLString},
        token : {type : GraphQLString},
    })
})


const UserQueryType = new GraphQLObjectType({
    name : "userQueryType",
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

const UserType = new GraphQLObjectType({
    name : "userType",
    fields : ()=> ({
        message : {type : GraphQLString},
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
    SignupType,
    LoginType,
    UserType,
    UserQueryType,
    ProductType,
    TransactionType
}