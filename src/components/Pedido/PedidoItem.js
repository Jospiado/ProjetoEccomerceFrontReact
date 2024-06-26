import React from 'react';

const PedidoItem = ({ pedido, onEdit, onDelete }) => (
    <li>
        {pedido.usuario_id} - {pedido.total} - {pedido.status}
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Excluir</button>
    </li>
);

export default PedidoItem;
