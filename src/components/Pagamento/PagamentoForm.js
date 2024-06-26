import React, { useState, useEffect } from 'react';

const PagamentoForm = ({ onAddPagamento, onUpdatePagamento, selectedPagamento }) => {
    const [pagamento, setPagamento] = useState({ id_pagamento: '', usuario_id: '', pedido_id: '', valor: '', status: '' });

    useEffect(() => {
        if (selectedPagamento) {
            setPagamento(selectedPagamento);
        }
    }, [selectedPagamento]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPagamento({ ...pagamento, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pagamento.id_pagamento) {
            onUpdatePagamento(pagamento);
        } else {
            onAddPagamento(pagamento);
        }
        setPagamento({ id_pagamento: '', usuario_id: '', pedido_id: '', valor: '', status: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="usuario_id" value={pagamento.usuario_id} onChange={handleChange} placeholder="ID do Usuário" />
            <input name="pedido_id" value={pagamento.pedido_id} onChange={handleChange} placeholder="ID do Pedido" />
            <input name="valor" value={pagamento.valor} onChange={handleChange} placeholder="Valor" />
            <input name="status" value={pagamento.status} onChange={handleChange} placeholder="Status" />
            <button type="submit">{pagamento.id_pagamento ? 'Atualizar' : 'Adicionar'}</button>
        </form>
    );
};

export default PagamentoForm;
