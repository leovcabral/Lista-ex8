//LETRA a) ----------------
let array_alunos = [
    {
        nome: "Aluno1",
        idade: 18,
        mediaFinal: 7,
    },
    {
        nome: "Aluno2",
        idade: 17,
        mediaFinal: 10,
    },
    {
        nome: "Aluno3",
        idade: 16,
        mediaFinal: 3,
    },
    {
        nome: "Aluno4",
        idade: 19,
        mediaFinal: 8,
    },
    {
        nome: "Aluno5",
        idade: 21,
        mediaFinal: 5,
    },
    {
        nome: "Aluno6",
        idade: 35,
        mediaFinal: 6,
    }    
]

let classStatistics = (turma) => {
    let reprovados = []
    let aprovados = []
    let soma_notas = 0
    let desvios = 0

    for(let aluno of turma){
        soma_notas = soma_notas + aluno.mediaFinal
        if (aluno.mediaFinal >= 5){
            aprovados.push(aluno.nome)
        }
        else {
            reprovados.push(aluno.nome)
        }
    }

    let media = soma_notas/turma.length

    for (let aluno of turma){
        desvios = desvios + (aluno.mediaFinal - media)**2
    }
    let DP = (desvios/turma.length)**(1/2)

    console.log(`Média da turma: ${media}`)
    console.log(`Desvio padrão de notas da turma: ${DP}`)
    console.log(`Alunos reprovados: ${reprovados}`)
    console.log(`Alunos aprovados: ${aprovados}`)
}

classStatistics(array_alunos)
// ---------------------------

//Letra b) ------------------------------
let addMencao = (turma) => {
    let array_objetos = []

    for(let aluno of turma){
        if (aluno.mediaFinal < 5){
            mencao = "RR"
        }
        else if (aluno.mediaFinal >=5 && aluno.mediaFinal <7){
            mencao = "MM"
        }
        else if (aluno.mediaFinal >=7 && aluno.mediaFinal <9){
            mencao = "MS"
        }
        else {
            mencao = "SS"
        }

        array_objetos.push({
            nome: aluno.nome,
            idade: aluno.idade,
            mediaFinal: aluno.mediaFinal,
            mencaoFinal: mencao
        })
    }

    console.log(array_objetos)
}

addMencao(array_alunos)