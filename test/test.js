const assert = require('assert');
const {listarPessoas} = require('../desafio.js');

describe('Lista', function() {
  it('deve retornar a quantidade correta de pessoas', function() {
    const pessoas = [
      { Nome: "Maria", Idade: 10, Email: "maria20@gmail.com" },
      { Nome: "José", Idade: 40, Email: "jose20@gmail.com" },
      { Nome: "Caio", Idade: 15, Email: "caio@hotmail.com" },
    ];

    assert.strictEqual(listarPessoas(pessoas), pessoas.length);
  })});