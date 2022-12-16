const { ApolloServer } = require('apollo-server')
const spendSchema = require('./spend/schemas/spend.graphql')
const spendResolvers = require('./spend/resolvers/spendResolvers');
const SpendsAPI = require('./spend/datasource/spend');

const typeDefs = [spendSchema];
const resolvers = [spendResolvers];

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    introspection: true,  
    playground: true, 
    dataSources: () => {
        return {
            spendsAPI: new SpendsAPI()
        }
    }
})

server.listen().then(({url}) => {
    console.log(`Servidor rodando na porta ${url}`)
})