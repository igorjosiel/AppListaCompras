var lista = document.querySelector('ul');
var btnAdd = document.getElementById('btnAdd');
var btnRemoveAll = document.getElementById('btnRemoveAll');
var produto = document.getElementById('produto');

var listArray = new Array();

btnAdd.addEventListener('click', addProduto);
btnRemoveAll.addEventListener('click', removeProdutoAll);

produto.addEventListener('keyup', function(event){
	if (event.keyCode === 13) addProduto();
});

function addProduto()
{
	if (produto.value != '')
	{
		var item = '<li>' + produto.value + '</li>';

		lista.innerHTML += item;

		listArray.push(item);

		cleanCampo();
	}
}

function cleanCampo()
{
	produto.value = '';
	produto.focus();
}

function removeProdutoAll()
{
	lista.innerHTML = '';
	listArray.remove();
}