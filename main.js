const form = document.getElementById('form-contato')
let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    const inputNomedoContato = document.getElementById('Nome-do-Contato')
    const inputNumerodeTelefone = document.getElementById('Numero-de-Telefone')

    let linha = '<tr>';
    linha += `<td>${inputNomedoContato.value}<td/>`;
    linha += `<td>${inputNumerodeTelefone.value}<td/>`;
    linha +='<tr/>'


    linhas += linha;

    const CorpoTabela = document.querySelector('tbody')
    CorpoTabela.innerHTML = linhas;

    inputNomedoContato.value = '';
    inputNumerodeTelefone.value = '';
})