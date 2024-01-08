function partidas(vitoria, derrota) {
    let resultado = vitoria - derrota
    return resultado
} 

function rank() {
    let resultadoRank = partidas(95, 27)
    let nivel = ""
    if(resultadoRank <=10) {
        nivel = "ferro"
    }else if (resultadoRank <=20){
        nivel = "Bronze"
    }else if(resultadoRank <= 50) {
        nivel = "Prata"
    }else if(resultadoRank <= 80) {
        nivel = "Ouro"
    }else if(resultadoRank <= 90){
        nivel = "Diamante"
    }else if(resultadoRank <= 100) {
        nivel = "Lendario"
    }else if(resultadoRank > 100) {
        nivel = "Imortal"
    }

    return `O heroi tem de saldo de ${resultadoRank} e esta no nivel de ${nivel}`
}

console.log(rank())