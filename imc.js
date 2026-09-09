const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let classificacao = '';
        
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidadi grau um.'; // Erro proposital
        } else {
            classificacao = 'com obesidade grave. Cuidado!';
        }
        
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
    }
}

calcular.addEventListener('click', imc);