// Seleciona os elementos necessários
const itemInput = document.getElementById('item');
const quantidadeInput = document.getElementById('quantidade');
const tipoSelect = document.getElementById('tipo');
const tabelaArmazen = document.getElementById('tabela-armazem');
const submitButton = document.querySelector('.buttom');

// Função para criar uma nova linha na tabela
function criarNovaLinha(item, quantidade, tipo) {
  const novaLinha = document.createElement('tr');
  const colunaItem = document.createElement('td');
  const colunaQuantidade = document.createElement('td');
  const colunaTipo = document.createElement('td');

  colunaItem.innerText = item;
  colunaQuantidade.innerText = quantidade;
  colunaTipo.innerText = tipo;

  novaLinha.appendChild(colunaItem);
  novaLinha.appendChild(colunaQuantidade);
  novaLinha.appendChild(colunaTipo);

  return novaLinha;
}

// Adiciona evento de clique ao botão de submit
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evita o envio do formulário padrão

  const item = itemInput.value;
  const quantidade = parseInt(quantidadeInput.value); // Converte valor para inteiro
  const tipo = tipoSelect.value;

  // Validação de dados (opcional)
  // if (item === '' || quantidade <= 0 || tipo === '') {
  //   alert('Preencha todos os campos corretamente!');
  //   return;
  // }

  const novaLinha = criarNovaLinha(item, quantidade, tipo);
  tabelaArmazen.getElementsByTagName('tbody')[0].appendChild(novaLinha);

  // Limpa os campos do formulário
  itemInput.value = '';
  quantidadeInput.value = '';
  tipoSelect.value = 'text'; // Define o valor padrão do select
});