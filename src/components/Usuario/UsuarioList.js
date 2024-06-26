import React, { useState, useEffect } from 'react';
import UsuarioItem from './UsuarioItem';
import UsuarioForm from './UsuarioForm';

const UsuarioList = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [selectedUsuario, setSelectedUsuario] = useState(null);

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        const response = await fetch('http://api.example.com/usuarios');
        const data = await response.json();
        setUsuarios(data);
    };

    const handleAddUsuario = async (usuario) => {
        const response = await fetch('http://api.example.com/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        });
        const newUsuario = await response.json();
        setUsuarios([...usuarios, newUsuario]);
    };

    const handleUpdateUsuario = async (usuario) => {
        await fetch(`http://api.example.com/usuarios/${usuario.id_usuario}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        });
        fetchUsuarios();
        setSelectedUsuario(null);
    };

    const handleDeleteUsuario = async (id_usuario) => {
        await fetch(`http://api.example.com/usuarios/${id_usuario}`, {
            method: 'DELETE',
        });
        fetchUsuarios();
    };

    return (
        <div>
            <UsuarioForm onAddUsuario={handleAddUsuario} onUpdateUsuario={handleUpdateUsuario} selectedUsuario={selectedUsuario} />
            <ul>
                {usuarios.map(usuario => (
                    <UsuarioItem key={usuario.id_usuario} usuario={usuario} onEdit={() => setSelectedUsuario(usuario)} onDelete={() => handleDeleteUsuario(usuario.id_usuario)} />
                ))}
            </ul>
        </div>
    );
};

export default UsuarioList;
