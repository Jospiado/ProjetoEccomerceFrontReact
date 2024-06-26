import React from 'react';

const PagamentoItem = ({ pagamento, onEdit, onDelete }) => (
    <li>
        {pagamento.usuario_id} - {pagamento.pedido_id} - {pagamento.valor} - {pagamento.status}
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Excluir</button>
    </li>
);

export default PagamentoItem;
