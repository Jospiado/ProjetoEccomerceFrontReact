import React, { useState, useEffect } from 'react';

const AvaliacaoForm = ({ onAddAvaliacao, onUpdateAvaliacao, selectedAvaliacao }) => {
    const [avaliacao, setAvaliacao] = useState({ id_avaliacao: '', produto_id: '', usuario_id: '', nota: '', comentario: '' });

    useEffect(() => {
        if (selectedAvaliacao) {
            setAvaliacao(selectedAvaliacao);
        }
    }, [selectedAvaliacao]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAvaliacao({ ...avaliacao, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (avaliacao.id_avaliacao) {
            onUpdateAvaliacao(avaliacao);
        } else {
            onAddAvaliacao(avaliacao);
        }
        setAvaliacao({ id_avaliacao: '', produto_id: '', usuario_id: '', nota: '', comentario: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="produto_id" value={avaliacao.produto_id} onChange={handleChange} placeholder="ID do Produto" />
            <input name="usuario_id" value={avaliacao.usuario_id} onChange={handleChange} placeholder="ID do Usuário" />
            <input name="nota" value={avaliacao.nota} onChange={handleChange} placeholder="Nota" />
            <input name="comentario" value={avaliacao.comentario} onChange={handleChange} placeholder="Comentário" />
            <button type="submit">{avaliacao.id_avaliacao ? 'Atualizar' : 'Adicionar'}</button>
        </form>
    );
};

export default AvaliacaoForm;
