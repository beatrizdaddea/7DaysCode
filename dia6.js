/* Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas -- Baseado no dia 5 
*/ 


let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";
let remover = "";

let adicionarMais = "sim";  e
while(adicionarMais != "não"){
    if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    } else {
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'."); // desafio do dia 6
    }
	
    while (adicionarMais != "sim" && adicionarMais != "não" && adicionarMais != "remover") { 
	alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (adicionarMais === "não"){  
	break;
    }
	
    if(adicionarMais === "sim"){
        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
        if(categoria === 'frutas'){
            frutas.push(comida);
        } else if (categoria === 'laticínios'){
            laticinios.push(comida);
        } else if (categoria === 'doces'){
            doces.push(comida);
        } else if (categoria === 'congelados'){
            congelados.push(comida);
        } else {
            alert("Essa categoria não foi pré-definida.")
        }
    } else if(adicionarMais === "remover"){
	if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){  
		alert(`A lista está vazia!`);
	} else {
		remover = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`);
		if(frutas.indexOf(remover) != -1){
			frutas.splice(frutas.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if(laticinios.indexOf(remover) != -1){
			laticinios.splice(laticinios.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (doces.indexOf(remover) != -1){
			doces.splice(doces.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (congelados.indexOf(remover) != -1){
			congelados.splice(congelados.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else {
			alert(`Não foi possível encontrar o item dentro da lista!`)
		}
	}
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
