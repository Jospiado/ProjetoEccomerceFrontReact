import React, { useState, useEffect } from 'react';
import PagamentoItem from './PagamentoItem';
import PagamentoForm from './PagamentoForm';

const PagamentoList = () => {
    const [pagamentos, setPagamentos] = useState([]);
    const [selectedPagamento, setSelectedPagamento] = useState(null);

    useEffect(() => {
        fetchPagamentos();
    }, []);

    const fetchPagamentos = async () => {
        const response = await fetch('http://api.example.com/pagamentos');
        const data = await response.json();
        setPagamentos(data);
    };

    const handleAddPagamento = async (pagamento) => {
        const response = await fetch('http://api.example.com/pagamentos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pagamento),
        });
        const newPagamento = await response.json();
        setPagamentos([...pagamentos, newPagamento]);
    };

    const handleUpdatePagamento = async (pagamento) => {
        await fetch(`http://api.example.com/pagamentos/${pagamento.id_pagamento}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pagamento),
        });
        fetchPagamentos();
        setSelectedPagamento(null);
    };

    const handleDeletePagamento = async (id_pagamento) => {
        await fetch(`http://api.example.com/pagamentos/${id_pagamento}`, {
            method: 'DELETE',
        });
        fetchPagamentos();
    };

    return (
        <div>
            <PagamentoForm onAddPagamento={handleAddPagamento} onUpdatePagamento={handleUpdatePagamento} selectedPagamento={selectedPagamento} />
            <ul>
                {pagamentos.map(pagamento => (
                    <PagamentoItem key={pagamento.id_pagamento} pagamento={pagamento} onEdit={() => setSelectedPagamento(pagamento)} onDelete={() => handleDeletePagamento(pagamento.id_pagamento)} />
                ))}
            </ul>
        </div>
    );
};

export default PagamentoList;
