const { RESTDataSource } = require('apollo-datasource-rest')

class SpendsAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'http://localhost:3000'
        this.customResponse = {
            code: 200,
            message: "Sucesso!"
        }
    }

    async getSpends() {
        return this.get('/data')
    }

    async getSpendById(id) {
        return this.get(`/data/${id}`)
    }
    
    async addSpends(spend) {
        const spends = await this.get('/data')
        spend.id = spend.spend.Exercicio + spend.spend.Orgao + (spends.length + 1)
        spend.spend.updatedAt = new Date().toLocaleString(),
        await this.post('data', {...spend.spend})
        return({
            ...this.customResponse,
            spend: {
                ...spend.spend
            }
        })
    }

    async deleteSpend(id) {
        await this.delete(`/data/${id}`)
        return this.customResponse
    }

    async deleteAllSpends() {
        await this.delete('/data')
        return this.customResponse
    }
}

module.exports = SpendsAPI