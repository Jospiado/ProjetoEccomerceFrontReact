import React, { useState, useEffect } from 'react';

const CarrinhoForm = ({ onAddCarrinho, onUpdateCarrinho, selectedCarrinho }) => {
    const [carrinho, setCarrinho] = useState({ id_carrinho: '', usuario_id: '', produto_id: '', quantidade: '' });

    useEffect(() => {
        if (selectedCarrinho) {
            setCarrinho(selectedCarrinho);
        }
    }, [selectedCarrinho]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarrinho({ ...carrinho, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (carrinho.id_carrinho) {
            onUpdateCarrinho(carrinho);
        } else {
            onAddCarrinho(carrinho);
        }
        setCarrinho({ id_carrinho: '', usuario_id: '', produto_id: '', quantidade: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="usuario_id" value={carrinho.usuario_id} onChange={handleChange} placeholder="ID do Usuário" />
            <input name="produto_id" value={carrinho.produto_id} onChange={handleChange} placeholder="ID do Produto" />
            <input name="quantidade" value={carrinho.quantidade} onChange={handleChange} placeholder="Quantidade" />
            <button type="submit">{carrinho.id_carrinho ? 'Atualizar' : 'Adicionar'}</button>
        </form>
    );
};

export default CarrinhoForm;
