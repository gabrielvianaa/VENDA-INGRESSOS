function comprar(){
    let tipoDeIngresso = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    if(qtd <=0){
        alert('Selecione uma quantidade de válida de ingressos');
    }
    
    if(tipoDeIngresso.value == 'pista'){
        comprarPista(qtd).value;
    }
    
    if(tipoDeIngresso.value == 'superior'){
        comprarSuperior(qtd).value;
    }
    if(tipoDeIngresso.value == 'inferior'){
        comprarInferior(qtd).value;
    }

}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista){
        alert('Quantidade indisponível!');
    }else if(qtd > 0){

        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso.');
    }

}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior){
        alert('Quantidade indisponível!');

    }else if(qtd > 0){
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }

}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert('Quantidade indisponível!');
    }else if(qtd > 0){
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso');
    }
}

