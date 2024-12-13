
function somar() {
    const numero1 = parseFloat(document.getElementById('numero1Soma').value);
    const numero2 = parseFloat(document.getElementById('numero2Soma').value);
    const resultado = numero1 + numero2;

    if (isNaN(resultado)) {
        alert('Por favor, insira valores válidos para a soma.');
    } else {
        document.getElementById('resultadoSoma').textContent = resultado;
    }
}


function subtrair() {
    const numero1 = parseFloat(document.getElementById('numero1Sub').value);
    const numero2 = parseFloat(document.getElementById('numero2Sub').value);
    const resultado = numero1 - numero2;

    if (isNaN(resultado)) {
        alert('Por favor, insira valores válidos para a subtração.');
    } else {
        document.getElementById('resultadoSub').textContent = resultado;
    }
}


function multiplicar() {
    const numero1 = parseFloat(document.getElementById('numero1Mult').value);
    const numero2 = parseFloat(document.getElementById('numero2Mult').value);
    const resultado = numero1 * numero2;

    if (isNaN(resultado)) {
        alert('Por favor, insira valores válidos para a multiplicação.');
    } else {
        document.getElementById('resultadoMult').textContent = resultado;
    }
}


function dividir() {
    const numero1 = parseFloat(document.getElementById('numero1Div').value);
    const numero2 = parseFloat(document.getElementById('numero2Div').value);

    if (numero2 === 0) {
        alert('Erro: Divisão por zero não é permitida.');
    } else if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, insira valores válidos para a divisão.');
    } else {
        const resultado = numero1 / numero2;
        document.getElementById('resultadoDiv').textContent = resultado;
    }
}
