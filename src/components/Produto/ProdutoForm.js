// src/components/Produto/ProdutoForm.js
import React, { useState, useEffect } from 'react';

const ProdutoForm = ({ onAddProduto, onUpdateProduto, selectedProduto }) => {
    const [produto, setProduto] = useState({ id_produto: '', nome: '', descricao: '', preco: '', estoque: '', categoria: '' });

    useEffect(() => {
        if (selectedProduto) {
            setProduto(selectedProduto);
        }
    }, [selectedProduto]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (produto.id_produto) {
            onUpdateProduto(produto);
        } else {
            onAddProduto(produto);
        }
        setProduto({ id_produto: '', nome: '', descricao: '', preco: '', estoque: '', categoria: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="nome" value={produto.nome} onChange={handleChange} placeholder="Nome" />
            <input name="descricao" value={produto.descricao} onChange={handleChange} placeholder="Descrição" />
            <input name="preco" value={produto.preco} onChange={handleChange} placeholder="Preço" />
            <input name="estoque" value={produto.estoque} onChange={handleChange} placeholder="Estoque" />
            <input name="categoria" value={produto.categoria} onChange={handleChange} placeholder="Categoria" />
            <button type="submit">{produto.id_produto ? 'Atualizar' : 'Adicionar'}</button>
        </form>
    );
};

export default ProdutoForm;
