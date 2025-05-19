function alunosAprovados(lista) {
    return lista.filter(aluno => aluno.nota >= 6);
}

function alunosReprovados(lista) {
    return lista.filter(aluno => aluno.nota < 6);
}

const alunos = [
    { nome: "Paula", nota: 7},
    { nome: "Paulo", nota: 4},
    { nome: "Julia", nota: 2},
    { nome: "Rivaldo", nota: 10},
    { nome: "Evellyn", nota: 1}
]

const aprovados = alunosAprovados(alunos);
const reprovados = alunosReprovados(alunos);


console.log("Os alunos que passaram de ano foram:");
aprovados.forEach(aluno => {
    console.log(`${aluno.nome} com nota ${aluno.nota}`);
});

console.log("Os alunos reprovados são:");
reprovados.forEach(aluno => {
    console.log(`${aluno.nome} com nota ${aluno.nota}`);
})
