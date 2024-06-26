// src/components/Produto/ProdutoItem.js
import React from 'react';

const ProdutoItem = ({ produto, onEdit, onDelete }) => (
    <li>
        {produto.nome} - {produto.preco}
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Excluir</button>
    </li>
);

export default ProdutoItem;
