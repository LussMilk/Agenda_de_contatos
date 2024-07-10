document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos de entrada
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    // Cria uma nova linha na tabela
    var table = document.getElementById('contact-table').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    // Adiciona células à nova linha
    var nameCell = newRow.insertCell(0);
    var phoneCell = newRow.insertCell(1);

    // Define os valores das células
    nameCell.textContent = name;
    phoneCell.textContent = phone;

    // Limpa os campos de entrada do formulário
    document.getElementById('contact-form').reset();
});
