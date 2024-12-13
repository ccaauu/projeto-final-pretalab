function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);
  
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
      document.getElementById("situacaoAluno").innerText =
        "Por favor, preencha todas as notas.";
      return;
    }

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    let situacao;
    if (media === 0) {
      situacao = "Infelizmente você zerou a prova :(";
    } else if (media <= 3) {
      situacao = `Caramba, deu ruim! Você obteve média ${media.toFixed(
        2
      )}. Estude mais e tente novamente!`;
    } else if (media <= 5.9) {
      situacao = `Você obteve média ${media.toFixed(
        2
      )}. Falta pouco para a média.`;
    } else if (media <= 7) {
      situacao = `Você está na média com ${media.toFixed(2)}.`;
    } else if (media <= 9.9) {
      situacao = `Notão! Sua média é ${media.toFixed(2)}!`;
    } else if (media === 10) {
      situacao = "Hoje é seu aniversário? Porque você está de parabéns! Média 10!";
    }
  
    document.getElementById("situacaoAluno").innerText = situacao;
  }
  