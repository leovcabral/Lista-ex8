//letra a
let imc = (peso, altura) => peso/altura**2
console.log(imc(86, 1.77))

//letra b
let generateUser = (name1, age, mail) => objeto = {nome:name1, idade:age, email: mail}
console.log(generateUser("Leo", 21, "leo@gmail.com").nome)
console.log(generateUser("Leo", 21, "leo@gmail.com").email)


//letra c
let arrayPar = (lista) => {
    let saida = []
    for(let num of lista){
        if (num%2 === 0) {
            saida.push(num)
        } 
    }
    return saida
}

console.log(arrayPar([1,2,3,4,5,6,7,8,9,10]))