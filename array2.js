

const alunos = [
    {nome:"aluno 1", faltas: 2, notas: [1,2,3,4,5]},
    {nome:"aluno 2", faltas: 5, notas: [6,7,8,9,0]},
    {nome:"aluno 3", faltas: 6, notas: [1,7,3,9,5]}
]



function aluno(nome, faltas, nota){
    this.nome = nome;
    this.faltas = faltas;
    this.nota = nota;
};
let aluno1 = new aluno("aluno 4", 0, [9,6,9,2,4])
console.log(aluno1)



function media(faltas,notas){
    notafinal = notas.reduce((a, b, c, d, e) => a + b + c + d + e)
    if (faltas < 5 && notafinal > 10) {console.log("Passou")}
    else {console.log("Não passou")}
}



function faltaplus(faltas) {faltas += 1}