var nomeHotel = String(prompt("Qual nome do hotel?"));
var user = String(prompt("Qual seu usuário? ")); 


function senha() {
    let password = parseInt(prompt("Qual sua senha? "))
    if (password === 2678) {
    alert(`Bem-vindo ao Hotel ${nomeHotel}, ${user} É um imenso prazer ter você por aqui. `);
    inicio();
    } else {
    alert("senha incorreta, tente novamente. ");
    senha();
        }
}
senha();
function inicio() {

    var escolha = parseInt(prompt('Selecione uma opção 1.) Reserva de Quartos 2.) Cadastro de Hóspedes 3.) Abastecimento de Carros 4.) Sair'));

    switch(escolha){
        case 1:
            reserva_quartos();
            break;
        case 2:
            cadastro_hospedes();
            break;
        case 3:
            abastecer_carros();
            break;
        case 4:
            sair();
            break;
        default:
            erro();
            break;

    }

    
}		

function reserva_quartos() {
    alert(`HOTEL ${nomeHotel} - RESERVA DE QUARTOS`);
    inicio();
}

function cadastro_hospedes() {
    alert(`HOTEL ${nomeHotel} - CADASTRO DE HÓSPEDES`);
    inicio();
}

function abastecer_carros() {
    alert(`HOTEL ${nomeHotel} - ABASTECER`);
    inicio();
}

function erro() {
    alert('Por favor, informe um número entre 1 e 4');
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