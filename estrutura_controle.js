var nome, nota01, nota02;
nome = prompt("Digite o nome do Aluno:")
nota01 = prompt("Digite a nota 01 do aluno:")
nota02 = prompt("Digite a nota 02 do Aluno:")

media = (parseInt(nota01) + parseInt(nota02)) / 2

if(media >=5)
  alert("aprovado!" + nome)
  else
  alert("Reprovado!" + nome)