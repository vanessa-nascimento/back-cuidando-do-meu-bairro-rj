const { RESTDataSource } = require('apollo-datasource-rest')

class SpendsAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'http://localhost:3000'
    }

    async getSpends() {
        return this.get('/data')
    }

    async getSpendById(id) {
        return this.get(`/data/${id}`)
    }
    
    async addSpends(spend) {
        const spends = await this.get('/data')
        spend.id = spend.Exercicio + spend.Orgao + (spends.length + 1)
        await this.post('data', {...spend})
        return({
            ...spend
        })
    }
}

module.exports = SpendsAPI