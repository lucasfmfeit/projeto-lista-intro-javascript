// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  let altura1 = Number(prompt('digite a altura'))
  let largura2 = Number(prompt('digite a largura'))
  let area = altura1 * largura2
    console.log(area)

}
calculaAreaRetangulo ()

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Insira aqui o ano do seu nascimento."))
  const anoNascimento = Number(prompt("Seu ano de nascimento"))
  const idade = anoAtual - anoNascimento
  console.log(idade)

}
calculaAreaRetangulo()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

let imc = peso / (altura * altura);
imc = Math.round(imc * 10) / 10;
return imc;

}
calculaIMC()

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Escreve aqui seu nome");
const idade = prompt("Escreva aqui sua idade em anos");
const email = prompt("Escreva aqui seu email");

 console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Escreva aqui sua primeira cor favorita")
const cor2 = prompt("Escreva aqui sua segunda cor favorita")
const cor3 = prompt("Escreva aqui sua terceira cor favorita")

const coresFavoritas = [cor1, cor2, cor3];
console.log(coresFavoritas)

}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06

function retornaStringEmMaiuscula(string) {
  let imprimir = string.toUpperCase();
  return imprimir

}
retornaStringEmMaiuscula()

// EXERCÍCIO 07

function calculaIngressosEspetaculo(custo, valorIngresso) {
   custo1 = Number(custo)
   valorIngresso1 = Number(valorIngresso)
  let valorFinal =  custo1/valorIngresso1
  return valorFinal

}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length 

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array.shift()

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let ultimaPosicao = array.length -1
  let ultimoElemento = array[ultimaPosicao]
  let primeiroElemento = array[0]
 
  let arrayMeio = array.slice(1,ultimaPosicao)
  arrayMeio.unshift(ultimoElemento)
  arrayMeio.push(primeiroElemento)
  return arrayMeio

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 // Condição 1: Se for divisível por 4, exceto se também for divisível por 100, a menos que seja divisível por 400.
 let condicao1 = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

 // Condição 2: Se for divisível por 400.
 let condicao2 = ano % 400 === 0;

 // Condição 3: Não são bissextos todos os demais anos.
 let condicao3 = !(ano % 4 === 0 && ano % 100 !== 0);

 // A condição final é o resultado da combinação das três condições
 let resultado = condicao1 || (condicao2 && condicao3);

 return resultado;

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
 
  let idade = prompt("Você tem mais de 18 anos? (sim/nao)").toLowerCase() === 'sim';

 
  let ensinoMedioCompleto = prompt("Você possui ensino médio completo? (sim/nao)").toLowerCase() === 'sim';


  let disponibilidadeCurso = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (sim/nao)").toLowerCase() === 'sim';


  let inscricaoValida = idade && ensinoMedioCompleto && disponibilidadeCurso;

  console.log(inscricaoValida)

}