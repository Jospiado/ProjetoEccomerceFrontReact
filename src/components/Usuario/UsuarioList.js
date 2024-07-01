import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsuarioList = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/usuario');
            setUsuarios(response.data);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Usuários</h2>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id_usuario}>
                        <strong>Nome:</strong> {usuario.nome} <br />
                        <strong>Email:</strong> {usuario.email} <br />
                        <strong>Endereço:</strong> {usuario.endereco} <br />
                        <strong>Telefone:</strong> {usuario.telefone} <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsuarioList;
