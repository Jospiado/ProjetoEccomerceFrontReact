import React, { useState, useEffect } from 'react';
import PedidoItem from './PedidoItem';
import PedidoForm from './PedidoForm';

const PedidoList = () => {
    const [pedidos, setPedidos] = useState([]);
    const [selectedPedido, setSelectedPedido] = useState(null);

    useEffect(() => {
        fetchPedidos();
    }, []);

    const fetchPedidos = async () => {
        const response = await fetch('http://api.example.com/pedidos');
        const data = await response.json();
        setPedidos(data);
    };

    const handleAddPedido = async (pedido) => {
        const response = await fetch('http://api.example.com/pedidos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pedido),
        });
        const newPedido = await response.json();
        setPedidos([...pedidos, newPedido]);
    };

    const handleUpdatePedido = async (pedido) => {
        await fetch(`http://api.example.com/pedidos/${pedido.id_pedido}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pedido),
        });
        fetchPedidos();
        setSelectedPedido(null);
    };

    const handleDeletePedido = async (id_pedido) => {
        await fetch(`http://api.example.com/pedidos/${id_pedido}`, {
            method: 'DELETE',
        });
        fetchPedidos();
    };

    return (
        <div>
            <PedidoForm onAddPedido={handleAddPedido} onUpdatePedido={handleUpdatePedido} selectedPedido={selectedPedido} />
            <ul>
                {pedidos.map(pedido => (
                    <PedidoItem key={pedido.id_pedido} pedido={pedido} onEdit={() => setSelectedPedido(pedido)} onDelete={() => handleDeletePedido(pedido.id_pedido)} />
                ))}
            </ul>
        </div>
    );
};

export default PedidoList;
