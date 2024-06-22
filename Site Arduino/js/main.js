document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o ícone do menu e a lista ul
    var menuIcon = document.querySelector('.menu-icon');
    var ul = document.querySelector('.ul');

    // Adiciona evento de clique ao ícone do menu
    menuIcon.addEventListener('click', function() {
        if (ul.classList.contains('ativo')) {
            ul.classList.remove('ativo');
        } else {
            ul.classList.add('ativo');
        }
    });

    // Seleciona todos os botões "Ver detalhes"
    var botoesDetalhes = document.querySelectorAll('.produto a[data-produto]');

    // Adiciona um evento de clique a cada botão "Ver detalhes"
    botoesDetalhes.forEach(function(botao) {
        botao.addEventListener('click', function(e) {
            e.preventDefault();
            var produtoId = botao.getAttribute('data-produto');
            var detalheProduto = document.getElementById('detalhes-produto');

            // Aqui você deve configurar os detalhes específicos do produto com base no ID
            var nomeProduto = botao.previousElementSibling.textContent.trim(); // Obtém o nome do produto
            var descricaoProduto = botao.nextElementSibling.textContent.trim(); // Obtém a descrição do produto
            var precoProduto = botao.nextElementSibling.nextElementSibling.textContent.trim(); // Obtém o preço do produto

            // Atualiza os elementos no bloco de detalhes do produto
            document.getElementById('details-name').textContent = nomeProduto;
            document.getElementById('details-description').textContent = descricaoProduto;
            document.getElementById('details-price').textContent = precoProduto;

            // Esconde a lista de produtos e mostra o bloco de detalhes do produto
            document.querySelector('.produtos').classList.add('hidden');
            detalheProduto.classList.remove('hidden');
        });
    });

    // Adiciona um evento de clique ao botão "Voltar"
    document.getElementById('voltar-produtos').addEventListener('click', function() {
        // Esconde o bloco de detalhes do produto e mostra a lista de produtos
        document.querySelector('.produtos').classList.remove('hidden');
        document.getElementById('detalhes-produto').classList.add('hidden');
    });
});
