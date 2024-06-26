import React, { useState, useEffect } from 'react';

const UsuarioForm = ({ onAddUsuario, onUpdateUsuario, selectedUsuario }) => {
    const [usuario, setUsuario] = useState({ id_usuario: '', nome: '', email: '', senha: '', endereco: '', telefone: '' });

    useEffect(() => {
        if (selectedUsuario) {
            setUsuario(selectedUsuario);
        }
    }, [selectedUsuario]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (usuario.id_usuario) {
            onUpdateUsuario(usuario);
        } else {
            onAddUsuario(usuario);
        }
        setUsuario({ id_usuario: '', nome: '', email: '', senha: '', endereco: '', telefone: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="nome" value={usuario.nome} onChange={handleChange} placeholder="Nome" />
            <input name="email" value={usuario.email} onChange={handleChange} placeholder="Email" />
            <input name="senha" value={usuario.senha} onChange={handleChange} placeholder="Senha" />
            <input name="endereco" value={usuario.endereco} onChange={handleChange} placeholder="Endereço" />
            <input name="telefone" value={usuario.telefone} onChange={handleChange} placeholder="Telefone" />
            <button type="submit">{usuario.id_usuario ? 'Atualizar' : 'Adicionar'}</button>
        </form>
    );
};

export default UsuarioForm;
