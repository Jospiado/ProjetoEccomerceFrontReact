// src/components/Produto/ProdutoList.js
import React, { useState, useEffect } from 'react';
import ProdutoItem from './ProdutoItem';
import ProdutoForm from './ProdutoForm';

const ProdutoList = () => {
    const [produtos, setProdutos] = useState([]);
    const [selectedProduto, setSelectedProduto] = useState(null);

    useEffect(() => {
        fetchProdutos();
    }, []);

    const fetchProdutos = async () => {
        const response = await fetch('http://api.example.com/produtos');
        const data = await response.json();
        setProdutos(data);
    };

    const handleAddProduto = async (produto) => {
        const response = await fetch('http://api.example.com/produtos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto),
        });
        const newProduto = await response.json();
        setProdutos([...produtos, newProduto]);
    };

    const handleUpdateProduto = async (produto) => {
        await fetch(`http://api.example.com/produtos/${produto.id_produto}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto),
        });
        fetchProdutos();
        setSelectedProduto(null);
    };

    const handleDeleteProduto = async (id_produto) => {
        await fetch(`http://api.example.com/produtos/${id_produto}`, {
            method: 'DELETE',
        });
        fetchProdutos();
    };

    return (
        <div>
            <ProdutoForm onAddProduto={handleAddProduto} onUpdateProduto={handleUpdateProduto} selectedProduto={selectedProduto} />
            <ul>
                {produtos.map(produto => (
                    <ProdutoItem key={produto.id_produto} produto={produto} onEdit={() => setSelectedProduto(produto)} onDelete={() => handleDeleteProduto(produto.id_produto)} />
                ))}
            </ul>
        </div>
    );
};

export default ProdutoList;
