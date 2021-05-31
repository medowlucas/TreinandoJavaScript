var mundosSulAmericanosTibia = [
    {
        nome: 'Brasilera',
        qtOnline: 302,
        tipo: 'Pvp'
    },
    {
        nome: 'Deletera',
        qtOnline: 23,
        tipo: 'RetroHardcore'
    },
    {
        nome: 'Eldera',
        qtOnline: 3442,
        tipo: 'non Pvp'
    }
]
var tabelinha = document.createElement('table')
document.body.appendChild(tabelinha)

for (let i = 0; i < mundosSulAmericanosTibia.length; i++) {
    var listaMundos = mundosSulAmericanosTibia[i]
    var linha = document.createElement('tr')
    var arrayMundos = new Array(listaMundos.nome, listaMundos.qtOnline, listaMundos.tipo)

    for (let c = 0; c < arrayMundos.length; c++) {
        var coluna = document.createElement('td')

        coluna.innerText = arrayMundos[c]

        linha.appendChild(coluna)
    }

    tabelinha.appendChild(linha)
}

