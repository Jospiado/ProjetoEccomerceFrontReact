import React from 'react';

const CarrinhoItem = ({ carrinho, onEdit, onDelete }) => (
    <li>
        {carrinho.usuario_id} - {carrinho.produto_id} - {carrinho.quantidade}
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Excluir</button>
    </li>
);

export default CarrinhoItem;
