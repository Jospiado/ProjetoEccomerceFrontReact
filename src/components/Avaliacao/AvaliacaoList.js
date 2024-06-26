import React, { useState, useEffect } from 'react';
import AvaliacaoItem from './AvaliacaoItem';
import AvaliacaoForm from './AvaliacaoForm';

const AvaliacaoList = () => {
    const [avaliacoes, setAvaliacoes] = useState([]);
    const [selectedAvaliacao, setSelectedAvaliacao] = useState(null);

    useEffect(() => {
        fetchAvaliacoes();
    }, []);

    const fetchAvaliacoes = async () => {
        const response = await fetch('http://api.example.com/avaliacoes');
        const data = await response.json();
        setAvaliacoes(data);
    };

    const handleAddAvaliacao = async (avaliacao) => {
        const response = await fetch('http://api.example.com/avaliacoes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(avaliacao),
        });
        const newAvaliacao = await response.json();
        setAvaliacoes([...avaliacoes, newAvaliacao]);
    };

    const handleUpdateAvaliacao = async (avaliacao) => {
        await fetch(`http://api.example.com/avaliacoes/${avaliacao.id_avaliacao}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(avaliacao),
        });
        fetchAvaliacoes();
        setSelectedAvaliacao(null);
    };

    const handleDeleteAvaliacao = async (id_avaliacao) => {
        await fetch(`http://api.example.com/avaliacoes/${id_avaliacao}`, {
            method: 'DELETE',
        });
        fetchAvaliacoes();
    };

    return (
        <div>
            <AvaliacaoForm onAddAvaliacao={handleAddAvaliacao} onUpdateAvaliacao={handleUpdateAvaliacao} selectedAvaliacao={selectedAvaliacao} />
            <ul>
                {avaliacoes.map(avaliacao => (
                    <AvaliacaoItem key={avaliacao.id_avaliacao} avaliacao={avaliacao} onEdit={() => setSelectedAvaliacao(avaliacao)} onDelete={() => handleDeleteAvaliacao(avaliacao.id_avaliacao)} />
                ))}
            </ul>
        </div>
    );
};

export default AvaliacaoList;
