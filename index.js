var nomeHotel = String(prompt("Qual nome do hotel?"));
var user = String(prompt("Qual seu usuário? ")); 

senha();
function senha() {
    let password = parseInt(prompt("Qual sua senha? "))
    if (password === 2678) {
    alert(`Bem-vindo ao Hotel ${nomeHotel}! \n${user}, É um imenso prazer ter você por aqui. `);
    inicio();
    } else {
    alert("senha incorreta, tente novamente. ");
    senha();
        }
}

function inicio() {
    var escolha = parseInt(prompt('Selecione uma opção:\n1- Reservar\n2- Cadastrar Hospede\n3- Pesquisar Hospede\n4- Reservar Evento\n5- Reservar Buffet\n6- Auditorio\n7- Restaurante\n8- Abastecimento\n9- Manutenção\n0- Sair'));
    switch(escolha){
        case 0:
            sair();
            break;   
        case 1:
            reserva_quartos();
            break;
        case 2:
            cadastro_hospedes();
            break;
        case 3:
            pesquisa_hospedes();
            break;
        case 4:
            eventos();
            break;
        case 5:
            buffet();
            break;
        case 6:
            auditorio();
            break;
        case 7:
            restaurante();
            break;
        case 8:
            abastecer_carros
            break;
        case 9:
            arCondicionado();
            break;     
        default:
            erro();
            break;
    }
}		

function reserva_quartos() {
    alert(`HOTEL ${nomeHotel} - RESERVA DE QUARTOS`);
    let diaria = Number(prompt("Qual valor da diária? "));
    let dias = Number(prompt("Qual a quantidade de dias? "));
    let valor = (diaria * dias);
    if (diaria <= 0) {
        alert("O valor é inválido.");
        reserva_quartos();
    }
    if (dias > 30 || dias < 0) {
        alert("Quantidade inválida, o valor não pode ser negativo e nem ultrapassar 30 dias");
        reserva_quartos();
    } else {
        let hospede = String(prompt("Qual nome do hóspede? "));
        alert(`O valor de ${dias} diárias é de ${valor}`);
        let confirma = window.confirm(`Deseja confirmar a hospedagem de ${dias} dias para ${hospede}?` );
        if (confirma == true) {
            alert("A reserva foi confirmada. ");
        } else {
            alert("A reserva não foi efetuada.");
            inicio();
        }   
    }
    inicio();
}

function cadastro_hospedes() {
    alert(`HOTEL ${nomeHotel} - CADASTRO DE HÓSPEDES`);
    let diaria = parseInt(prompt("Qual o valor padrão da diária?"));
    let hospedes = [];
    let nomeHospede, idadeHospede, valorTotal = 0, gratuidades = 0, meiasHospedagens = 0;

    while (true) {
        let continuar = window.confirm("Deseja cadastrar um novo hóspede?");
        if (continuar == false) {
            break;
        }
        nomeHospede = prompt("Qual o nome do Hóspede?");
        idadeHospede = parseInt(prompt("Qual a idade do Hóspede?"));
        if (idadeHospede <= 6) {
            gratuidades++;
            hospedes.push(`${nomeHospede} possui gratuidade`);
        } else {
            let valorDiaria = idadeHospede > 60 ? diaria / 2 : diaria;
            valorTotal += valorDiaria;
            if (idadeHospede > 60) {
            meiasHospedagens++;
            hospedes.push(`${nomeHospede} paga meia`);
            } else {
            hospedes.push(`${nomeHospede} cadastrada(o) com sucesso.`);
            }
        }
    }

    alert(`${hospedes.join("\n")}\nO valor total das hospedagens é: R$${valorTotal}; ${gratuidades} gratuidade(s); ${meiasHospedagens} meia(s)`);


}

function pesquisa_hospedes() {
    let hospedes = [];
    let escolha = parseInt(prompt('Selecione uma opção: \n1.) Cadastrar\n2.) Pesquisar \n3.) Voltar'));
    switch (escolha){
        case 1:
            let nomeH = String(prompt("Qual hospede deseja cadastrar?"));
            hospedes.push(nomeH); // Adiciona o nome do hóspede cadastrado na array hospedes
            alert(`O hospede ${nomeH} foi cadastrado com sucesso!`);
            inicio()
            break;
        case 2:
            let pesquisa = String(prompt("Qual nome do hospede que deseja pesquisar?")); 
            if (hospedes.includes(pesquisa)) { // Usa a array hospedes para verificar se o nome do hóspede pesquisado foi cadastrado
                alert(`O hospede ${pesquisa} foi encontrado.`);
                inicio()
                break;
            } else {
                alert("O hospede não foi encontrado.");
                pesquisa_hospedes();
            }
            break;
        case 3: 
            inicio()
            break;
    }
}

function eventos() {

    let numGarcons = parseInt(prompt("Quantos garçons serão necessários?"));
    let duracaoEvento = parseInt(prompt("Qual a duração do evento em horas?"));
    let custoGarcons = numGarcons * 10.5 * duracaoEvento;
    alert("Custo total: R$ " + custoGarcons.toFixed(2));
    let resposta = prompt("Gostaria de efetuar a reserva? S/N");
    if (resposta == "S" || resposta == "s") {
    alert("Reserva efetuada com sucesso.");
    inicio();
    } else {
    alert("Reserva não efetuada.");
    }

}

function buffet() {
    let qtdConvidados = parseInt(prompt("Qual o número de convidados para o evento?"));
    if (qtdConvidados > 350) {
    alert("Quantidade de convidados superior à capacidade máxima.");
    } else {
    let qtdAgua = qtdConvidados * 0.5;
    let qtdCafe = qtdConvidados * 0.2;
    let qtdSalgados = qtdConvidados * 7;
    let custoAgua = qtdAgua * 0.4;
    let custoCafe = qtdCafe * 0.8;
    let custoSalgados = (qtdSalgados / 100) * 34;
    let custoTotal = custoAgua + custoCafe + custoSalgados;
    alert(`O evento precisará de ${qtdCafe.toFixed(1)} litros de café, ${qtdAgua.toFixed(1)} litros de água, ${qtdSalgados} salgados.`);
    alert(`O custo total do evento será de R$ ${custoTotal.toFixed(2)}.`);
    let resposta = prompt("Gostaria de efetuar a reserva? S/N");
    if (resposta.toUpperCase() == "S") {
        alert("Reserva efetuada com sucesso.");
        inicio();
    } else {
        alert("Reserva não efetuada.");
    }
    }

}


function auditorio() {
    const capacidadeLaranja = 150;
    const cadeirasAdicionaisLaranja = 70;
    const capacidadeColorado = 350
    const numConvidados = parseInt(prompt("Qual o número de convidados para o seu evento?"));

    if (numConvidados <= 0 || numConvidados > capacidadeColorado) {
      alert("Número de convidados inválido.");
    } else {
      if (numConvidados <= capacidadeLaranja) {
        const cadeirasNecessarias = Math.min(cadeirasAdicionaisLaranja, capacidadeLaranja - numConvidados);
        alert(`Use o auditório Laranja (inclua mais ${cadeirasNecessarias} cadeiras)`);
      } else {
        alert("Use o auditório Colorado");
      }
      const resposta = prompt("Gostaria de efetuar a reserva? S/N");
      if (resposta.toUpperCase() === "S") {
        alert("{Nome}, reserva efetuada com sucesso.");
      } else {
        alert("{Nome}, reserva não efetuada.");
      }
    }
}

function restaurante() {
    let diaDaSemana = prompt("Qual o dia do seu evento?").toLowerCase(); // transforma em letra minúscula
    let hora = parseInt(prompt("Qual a hora do seu evento?"));
    let disponivel = false;
    if ((diaDaSemana === "segunda" || diaDaSemana === "terca" || diaDaSemana === "quarta" || diaDaSemana === "quinta" || diaDaSemana === "sexta") && hora >= 7 && hora <= 23) {
        disponivel = true;
    } else if ((diaDaSemana === "sabado" || diaDaSemana === "domingo") && hora >= 7 && hora <= 15) {
        disponivel = true;
    }
    if (disponivel) {
        let nomeEmpresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para ${nomeEmpresa}: ${diaDaSemana} às ${hora}hs.`);
    } else {
        alert("Restaurante indisponível");
    }

}

function abastecer_carros() {
        alert(`HOTEL ${nomeHotel} - ABASTECER`);
    const valorAlcoolWayneOil = Number(prompt("Qual o valor do álcool no posto Wayne Oil?"));
    const valorGasolinaWayneOil = Number(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
    const valorAlcoolStarkPetrol = Number(prompt("Qual o valor do álcool no posto Stark Petrol?"));
    const valorGasolinaStarkPetrol = Number(prompt("Qual o valor da gasolina no posto Stark Petrol?"));
    const proporcaoWayneOil = valorAlcoolWayneOil / valorGasolinaWayneOil;
    const proporcaoStarkPetrol = valorAlcoolStarkPetrol / valorGasolinaStarkPetrol;

    let postoMaisBarato;
    let precoMaisBarato;
    if (valorGasolinaWayneOil * 42 <= valorGasolinaStarkPetrol * 42) {
    postoMaisBarato = "Wayne Oil";
    precoMaisBarato = valorGasolinaWayneOil * 42;
    } else {
    postoMaisBarato = "Stark Petrol";
    precoMaisBarato = valorGasolinaStarkPetrol * 42;
    }

    let combustivelMaisAtraente;
    if (proporcaoWayneOil < 0.7 && proporcaoWayneOil < proporcaoStarkPetrol) {
    combustivelMaisAtraente = "álcool";
    } else {
    combustivelMaisAtraente = "gasolina";
    }

    alert(`É mais barato abastecer com ${combustivelMaisAtraente} no posto ${postoMaisBarato}. Preço: R$ ${precoMaisBarato.toFixed(2)}`);

}

function arCondicionado() {
        let empresas = [];

    while (true) {
    let nome = prompt("Qual o nome da empresa?");
    let valorPorAparelho = parseFloat(prompt("Qual o valor por aparelho?"));
    let qtdAparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"));
    let desconto = parseInt(prompt("Qual a porcentagem de desconto?"));
    let qtdMinDesconto = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));

    let valorTotal = valorPorAparelho * qtdAparelhos;
    if (qtdAparelhos >= qtdMinDesconto) {
        valorTotal = valorTotal - (valorTotal * (desconto / 100));
    }

    empresas.push({nome: nome, valor: valorTotal});

    let continuar = prompt("Deseja informar novos dados? (S/N)").toUpperCase();
    if (continuar === "N") {
        break;
    }
    }

    let menorValor = empresas[0].valor;
    let nomeMenorValor = empresas[0].nome;
    for (let i = 1; i < empresas.length; i++) {
    if (empresas[i].valor < menorValor) {
        menorValor = empresas[i].valor;
        nomeMenorValor = empresas[i].nome;
    }
    }

    for (let i = 0; i < empresas.length; i++) {
    alert(`O serviço de ${empresas[i].nome} custará R$ ${empresas[i].valor}`);
    }

    alert(`O orçamento de menor valor é o de ${nomeMenorValor} por R$ ${menorValor}`);

}

function erro() {
    alert('Por favor, informe um número valido');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(`Até logo ${user}.`)
        window.close();
    } else {
        inicio();
    }
}