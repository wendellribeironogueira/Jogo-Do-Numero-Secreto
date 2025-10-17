# Jogo do Número Secreto

Projeto de um jogo simples em JavaScript, HTML e CSS criado durante o curso "DevOps: Administração, operação e monitoramento de sistemas" (Santander / Alura).

O objetivo do jogo é que o jogador adivinhe um número secreto entre 1 e 10. O jogo informa se o chute é maior ou menor que o número secreto e conta o número de tentativas.

Demo online

- Jogo hospedado no Vercel: https://jogo-do-numero-secreto-rouge-ten.vercel.app/

Autor

- Perfil GitHub: https://github.com/wendellribeironogueira

Funcionalidades

- Interface web responsiva (HTML/CSS).
- Lógica do jogo em `app.js`: geração de número aleatório sem repetição até esgotar o intervalo, verificação de chutes e contagem de tentativas.
- Uso da Web Speech API (quando disponível) para ler as mensagens em voz (pt-BR).
- Botão "Novo jogo" que reinicia o sorteio e reseta as tentativas.

Como executar localmente

1. Clone o repositório ou baixe os arquivos.
2. Abra `index.html` diretamente no navegador ou sirva a pasta localmente (recomendado durante o desenvolvimento).

Exemplo rápido com Python (PowerShell):

```powershell
# a partir da raiz do repositório
python -m http.server 5500
# depois abra no navegador:
# http://localhost:5500
```

Estrutura de arquivos

- `index.html` — Página principal do jogo.
- `app.js` — Lógica do jogo.
- `style.css` — Estilos da página.
- `img/` — Imagens usadas pelo layout. Contém também arquivos gerados pelo Live Server (`JS Game.html` e `JS Game_files/`) que são cópias locais de desenvolvimento.

Observações técnicas e sugestões

- Validação de entrada: atualmente o campo de input não impede que o usuário digite valores fora do intervalo (ex.: 0 ou 11) ou deixe em branco. Recomenda-se validar o valor antes de processar o chute.
- Acessibilidade: adicionar `label` para o input e gerenciamento de foco para melhorar o uso por leitores de tela.
- Limpeza do repositório: os arquivos em `img/JS Game.html` e `img/JS Game_files/` foram gerados pelo Live Server — podem ser removidos do repositório para manter o histórico limpo.
- Melhorias possíveis: histórico de chutes, animações, testes unitários para funções determinísticas (por exemplo, `gerarNumeroAleatorio`).

Licença

Sinta-se à vontade para usar e adaptar o código. 
