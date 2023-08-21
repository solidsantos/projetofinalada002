function cadastro() {
    const produto = {
        cod: document.querySelector('#cod').value,
        prod: document.querySelector('#prod').value,
        prod_qtd: document.querySelector('#prod_qtd').value,
        price_prod: document.querySelector('#price_prod').value,
        total: parseFloat(document.querySelector('#prod_qtd').value).toFixed(2) * parseFloat(document.querySelector('#price_prod').value).toFixed(2),
    }
    /*document.getElementById('table-product').innerHTML += `
     <tr>
         <th>${produto.cod}</th>
         <th>${produto.prod}</th>
         <th>${produto.prod_qtd}</th>
         <th>${produto.cod}</th>
     </tr>    
     `;*/
    document.getElementById('table-product').appendChild(setTableRow(produto));
}
function setTableRow(produto) {
    const row = document.createElement('tr');
    const cod = setTableColumn(produto.cod);
    const prod = setTableColumn(produto.prod);
    const prod_qtd = setTableColumn(produto.prod_qtd);
    const price_prod = setTableColumn(produto.price_prod);
    const total = setTableColumn(produto.total);
    row.appendChild(cod);
    row.appendChild(prod);
    row.appendChild(prod_qtd);
    row.appendChild(price_prod);
    row.appendChild(total);
    return row;
}
function setTableColumn(data) {
    const column = document.createElement('td');
    column.textContent = data;
    return column;
}

