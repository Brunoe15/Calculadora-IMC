const calcular = document.getElementById('botao');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
            resultado.style.backgroundColor = '#FFBC05';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!'
            resultado.style.backgroundColor = '#00b71e';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.'
            resultado.style.backgroundColor = '#F9E507';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
            resultado.style.backgroundColor = '#FFBC05';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
            resultado.style.backgroundColor = '#FF3C2A';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
            resultado.style.backgroundColor = '#FF3C2A';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

        setTimeout(function() {
            resultado.textContent = '';  
            resultado.style.backgroundColor = '#F2F2F2'
        }, 10000);
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);