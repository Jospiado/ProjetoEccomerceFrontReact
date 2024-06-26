import React, { useState, useEffect } from 'react';
import CarrinhoItem from './CarrinhoItem';
import CarrinhoForm from './CarrinhoForm';

const CarrinhoList = () => {
    const [carrinhos, setCarrinhos] = useState([]);
    const [selectedCarrinho, setSelectedCarrinho] = useState(null);

    useEffect(() => {
        fetchCarrinhos();
    }, []);

    const fetchCarrinhos = async () => {
        const response = await fetch('http://api.example.com/carrinhos');
        const data = await response.json();
        setCarrinhos(data);
    };

    const handleAddCarrinho = async (carrinho) => {
        const response = await fetch('http://api.example.com/carrinhos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(carrinho),
        });
        const newCarrinho = await response.json();
        setCarrinhos([...carrinhos, newCarrinho]);
    };

    const handleUpdateCarrinho = async (carrinho) => {
        await fetch(`http://api.example.com/carrinhos/${carrinho.id_carrinho}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(carrinho),
        });
        fetchCarrinhos();
        setSelectedCarrinho(null);
    };

    const handleDeleteCarrinho = async (id_carrinho) => {
        await fetch(`http://api.example.com/carrinhos/${id_carrinho}`, {
            method: 'DELETE',
        });
        fetchCarrinhos();
    };

    return (
        <div>
            <CarrinhoForm onAddCarrinho={handleAddCarrinho} onUpdateCarrinho={handleUpdateCarrinho} selectedCarrinho={selectedCarrinho} />
            <ul>
                {carrinhos.map(carrinho => (
                    <CarrinhoItem key={carrinho.id_carrinho} carrinho={carrinho} onEdit={() => setSelectedCarrinho(carrinho)} onDelete={() => handleDeleteCarrinho(carrinho.id_carrinho)} />
                ))}
            </ul>
        </div>
    );
};

export default CarrinhoList;
