const spendResolvers = {
    Query: {
        spends: (root, args, { dataSources }, info) => dataSources.
        spendsAPI.getSpends(),
        spend: (root, { id }, { dataSources }) => dataSources.spendsAPI.getSpendById(id)
    },
    
    Mutation: {
        addSpends: async (root, spend, { dataSources }) => dataSources.spendsAPI.addSpends(spend)
    }
}

module.exports = spendResolvers