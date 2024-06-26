import React from 'react';

const UsuarioItem = ({ usuario, onEdit, onDelete }) => (
    <li>
        {usuario.nome} - {usuario.email}
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Excluir</button>
    </li>
);

export default UsuarioItem;
