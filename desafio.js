function listarPessoas(pessoas) {
  pessoas.forEach((pessoa) => {
    if (pessoa.Idade < 12) console.log(pessoa.Nome + "-" + "Criança");
    else if (pessoa.Idade >= 12 && pessoa.Idade <= 17) console.log(pessoa.Nome + "-" +"Adolescente");
    else console.log(pessoa.Nome + "-" +"Adulto");
  });

  return pessoas.length;
};

module.exports = {
  listarPessoas,
};