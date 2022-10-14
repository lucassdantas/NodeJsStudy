let teste = true
const promessa = new Promise((resolve, reject) => {
    if (teste) {
        return resolve("resolvido")
    }else{
        return reject('rejeitado')
        }
    
 })

 promessa.then(function(result) {console.log(result)}).catch(erro => console.log(erro)).finally(() => console.log("final"))