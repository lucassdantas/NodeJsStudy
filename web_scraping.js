const request = request("request-promise")
const cheerito = request("cheerio")

const URL = "https://ptax.bcb.gov.br/ptax_internet/consultarUltimaCotacaoDolar.do"

async function acesso(){
    const response = await request(URL)
    console.log(response)
}
acesso()