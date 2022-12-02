const {GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID} = require('graphql');
const { client } = require('../models/db');
const { SignupType, LoginType, UserType} = require('./types');
const {CreateJwtToken} = require('../utils/auth');

const Mutation = new GraphQLObjectType({
    name : 'mutaions',
    fields : {
        userSignUp: {
            type : SignupType,
            description : "User Registration",
            args : {
                fullName : {type : new GraphQLNonNull(GraphQLString)},
                email : {type : new GraphQLNonNull(GraphQLString)},
                password : {type : new GraphQLNonNull(GraphQLString)}
            },
            
            async resolve(parent, args, description){
                await client.query(`INSERT INTO registers ("fullName", "email", "password") VALUES ('${args.fullName}', '${args.email}', '${args.password}')`)             
                return  {message : "Registration has been succesfull"}
            }
        },

        userLogin : {
            type : LoginType,
            description : "user Login",
            args : {
                email : {type : GraphQLString},
                password : {type : GraphQLString}
            },
            async resolve(parent, args){
                const userRow = await client.query(`SELECT email, password from registers WHERE email = '${args.email}' LIMIT 1`)
                const [user] = userRow.rows
                if(!user || args.password !== user.password){
                    throw new Error('Invalid Credentials') 
                }
                const token = CreateJwtToken(user);
                return { message : "Login Successfull", token : token}
                
            }
        },
        addUser : {
            type : UserType,
            args : {
                firstName :  {type : new GraphQLNonNull(GraphQLString)},
                lastName :  {type : new GraphQLNonNull(GraphQLString)},
                image :  {type : new GraphQLNonNull(GraphQLString)},
                age :  {type : new GraphQLNonNull(GraphQLString)},
                email :  {type : new GraphQLNonNull(GraphQLString)},
                phone :  {type : new GraphQLNonNull(GraphQLString)},
                birthDate :  {type : new GraphQLNonNull(GraphQLString)},
                bloodGroup :  {type : new GraphQLNonNull(GraphQLString)},
            },
            async resolve(parent, args){
                await client.query(`INSERT INTO users ("firstName", "lastName", "image", "age", "email", "phone", "birthDate", "bloodGroup" ) values('${args.firstName}', '${args.lastName}', '${args.image}', '${args.age}', '${args.email}', '${args.phone}', '${args.birthDate}', '${args.bloodGroup}' )`)
                return  {message : "User has been added"}
            }
        },
        removeUser : {
            type : UserType,
            args : {id : {type : GraphQLID}},
            async resolve(parent, args){
               await client.query(`DELETE FROM users WHERE id=${args.id}`)
               return {message : "User has been deleted"}
            }
        }
    }
})





module.exports = Mutation;