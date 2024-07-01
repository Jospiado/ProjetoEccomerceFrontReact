import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsuarioForm = ({ selectedUsuario }) => {
    const [usuario, setUsuario] = useState({ id_usuario: '', nome: '', email: '', senha: '', endereco: '', telefone: '' });

    useEffect(() => {
        if (selectedUsuario) {
            setUsuario(selectedUsuario);
            console.log('Selected usuario:', selectedUsuario);
        }
    }, [selectedUsuario]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
        console.log('Field changed:', name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form:', usuario);
        try {
            if (usuario.id_usuario) {
                console.log('Updating usuario:', usuario);
                await axios.put(`http://localhost:8080/api/usuario/${usuario.id_usuario}`, usuario);
                console.log('Updated user:', usuario);
            } else {
                console.log('Adding usuario:', usuario);
                const response = await axios.post('http://localhost:8080/api/usuario', usuario);
                console.log('Added user:', response.data);
            }
            setUsuario({ id_usuario: '', nome: '', email: '', senha: '', endereco: '', telefone: '' });
        } catch (error) {
            console.error('Erro ao salvar usuário:', error);
        }
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
