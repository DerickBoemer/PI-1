

const produtos = [
    {nome:"Produto 1", valor: 100, nota: 9, status: true},
    {nome:"Produto 2", valor: 50, nota: 10, status: true},
    {nome:"Produto 3", valor: 25, nota: 2, status: false}
]



const shopcart = produtos.filter((produto) => {
    const valor = produto.valor
    const nota = produto.nota
    const status = produto.status

    const varcheck = (valor > 25 && valor <100) && (nota > 5) && (status = true)
    return varcheck
})



varcheck.forEach((produto) => {
    console.log("Produto: ",produto.nome)
    console.log("Valor: ",produto.valor)
    console.log("Nota: ",produto.nota)
    console.log("Status: ",produto.status,"\n")
    })

    const total = varcheck.reduce((acumulador, produto) => {return acumulador.valor + produto.valor})
    console.log("Total: ", total)