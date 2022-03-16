const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Account {
        name:String
        age:Int
        department:String
    }
    type Query {
        hello:String
        name:String
        sex:String
        age:Int
        account:Account
    }
`);

const root = {
    hello: () => {
        return 'hello world';
    },
    name: () => {
        return 'Alex';
    },
    sex: () => {
        return 'Male';
    },
    age: () => {
        return 18;
    },
    account: () =>{
        return {
            name:'孙大圣',
            age:999,
            department:'天宫'
        }
    }
}

const app = express()

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(3000)