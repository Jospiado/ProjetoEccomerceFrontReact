import React from 'react';

const CategoriaItem = ({ categoria, onEdit, onDelete }) => (
    <li>
        {categoria.nome} - {categoria.descricao}
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Excluir</button>
    </li>
);

export default CategoriaItem;
