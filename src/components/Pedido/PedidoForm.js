import React, { useState, useEffect } from 'react';

const PedidoForm = ({ onAddPedido, onUpdatePedido, selectedPedido }) => {
    const [pedido, setPedido] = useState({ id_pedido: '', usuario_id: '', total: '', status: '' });

    useEffect(() => {
        if (selectedPedido) {
            setPedido(selectedPedido);
        }
    }, [selectedPedido]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPedido({ ...pedido, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pedido.id_pedido) {
            onUpdatePedido(pedido);
        } else {
            onAddPedido(pedido);
        }
        setPedido({ id_pedido: '', usuario_id: '', total: '', status: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="usuario_id" value={pedido.usuario_id} onChange={handleChange} placeholder="ID do Usuário" />
            <input name="total" value={pedido.total} onChange={handleChange} placeholder="Total" />
            <input name="status" value={pedido.status} onChange={handleChange} placeholder="Status" />
            <button type="submit">{pedido.id_pedido ? 'Atualizar' : 'Adicionar'}</button>
        </form>
    );
};

export default PedidoForm;
