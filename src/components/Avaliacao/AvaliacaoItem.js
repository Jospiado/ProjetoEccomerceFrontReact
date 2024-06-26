import React from 'react';

const AvaliacaoItem = ({ avaliacao, onEdit, onDelete }) => (
    <li>
        {avaliacao.produto_id} - {avaliacao.usuario_id} - {avaliacao.nota} - {avaliacao.comentario}
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Excluir</button>
    </li>
);

export default AvaliacaoItem;
