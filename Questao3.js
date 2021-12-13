while (true){
    let escala = prompt("Qual a escala de temperatura de entrada?")
    let temp = prompt("Digite a temperatura")

    switch (escala.toLowerCase()) {
        case "celsius":
            TF = parseInt(temp)*9/5 + 32
            TK = parseInt(temp) + 273
            alert(`${temp} graus celsius é equivalente a ${TF} graus fahrenheit e ${TK} graus kelvin.`)
            break
            
        case "kelvin":
            TC = parseInt(temp) - 273
            TF = TC*9/5 + 32
            alert(`${temp} graus kelvin é equivalente a ${TF} graus fahrenheit e ${TC} graus celsius.`)
            break 

        case "fahrenheit":
            TC = (parseInt(temp) - 32)*5/9
            TK = TC + 273
            alert(`${temp} graus fahrenheit é equivalente a ${TC} graus celsius e ${TK} graus kelvin.`)
            break

    }
}