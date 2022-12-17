const  { GraphQLScalarType } = require('graphql')

const spendResolvers = {
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'String de data e hora no formato ISO-8601',
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value)
    }),
    Query: {
        spends: (root, args, { dataSources }) => dataSources.
        spendsAPI.getSpends(),
        spend: (root, { id }, { dataSources }) => dataSources.spendsAPI.getSpendById(id)
    },

    Mutation: {
        addSpends: async (root, spend, { dataSources }) => dataSources.spendsAPI.addSpends(spend),
        deleteSpend: async (root, { id }, { dataSources }) => dataSources.spendsAPI.deleteSpend(id),
        deleteSpends: async (root, args, { dataSources }) => dataSources.spendsAPI.deleteAllSpends()
    }
}

module.exports = spendResolvers