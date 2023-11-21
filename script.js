  <script>
    var jogoAtivo = true;

    function verificarResposta(resposta) {
      if (!jogoAtivo) {
        return;
      }

      var mensagem = document.getElementById('mensagem');
      var btnA = document.getElementById('btnA');
      var btnB = document.getElementById('btnB');
      var btnC = document.getElementById('btnC');

      jogoAtivo = false; // Desativa o jogo após a primeira jogada

      if (resposta === 'A') {
        mensagem.textContent = 'Você acertou! Pode avançar duas casas.';
        // Lógica para avançar duas casas aqui
      } else {
        mensagem.textContent = 'Você errou! Volte cinco casas. A correta é letra A';
        // Lógica para voltar duas casas aqui
      }

      // Desativa os botões após a jogada
      btnA.disabled = true;
      btnB.disabled = true;
      btnC.disabled = true;
    }
  </script>
</body>
</html>