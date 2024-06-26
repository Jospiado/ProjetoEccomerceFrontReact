import React, { useState, useEffect } from 'react';

const CategoriaForm = ({ onAddCategoria, onUpdateCategoria, selectedCategoria }) => {
    const [categoria, setCategoria] = useState({ id_categoria: '', nome: '', descricao: '' });

    useEffect(() => {
        if (selectedCategoria) {
            setCategoria(selectedCategoria);
        }
    }, [selectedCategoria]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoria({ ...categoria, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (categoria.id_categoria) {
            onUpdateCategoria(categoria);
        } else {
            onAddCategoria(categoria);
        }
        setCategoria({ id_categoria: '', nome: '', descricao: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="nome" value={categoria.nome} onChange={handleChange} placeholder="Nome" />
            <input name="descricao" value={categoria.descricao} onChange={handleChange} placeholder="Descrição" />
            <button type="submit">{categoria.id_categoria ? 'Atualizar' : 'Adicionar'}</button>
        </form>
    );
};

export default CategoriaForm;
