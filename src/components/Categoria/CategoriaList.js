import React, { useState, useEffect } from 'react';
import CategoriaItem from './CategoriaItem';
import CategoriaForm from './CategoriaForm';

const CategoriaList = () => {
    const [categorias, setCategorias] = useState([]);
    const [selectedCategoria, setSelectedCategoria] = useState(null);

    useEffect(() => {
        fetchCategorias();
    }, []);

    const fetchCategorias = async () => {
        const response = await fetch('http://localhost:8080/api/categoria');
        const data = await response.json();
        setCategorias(data);
    };

    const handleAddCategoria = async (categoria) => {
        const response = await fetch('http://localhost:8080/api/categoria', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(categoria),
        });
        const newCategoria = await response.json();
        setCategorias([...categorias, newCategoria]);
    };

    const handleUpdateCategoria = async (categoria) => {
        await fetch(`http://localhost:8080/api/categoria/${categoria.id_categoria}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(categoria),
        });
        fetchCategorias();
        setSelectedCategoria(null);
    };

    const handleDeleteCategoria = async (id_categoria) => {
        await fetch(`http://localhost:8080/api/categoria/${id_categoria}`, {
            method: 'DELETE',
        });
        fetchCategorias();
    };

    return (
        <div>
            <CategoriaForm onAddCategoria={handleAddCategoria} onUpdateCategoria={handleUpdateCategoria} selectedCategoria={selectedCategoria} />
            <ul>
                {categorias.map(categoria => (
                    <CategoriaItem key={categoria.id_categoria} categoria={categoria} onEdit={() => setSelectedCategoria(categoria)} onDelete={() => handleDeleteCategoria(categoria.id_categoria)} />
                ))}
            </ul>
        </div>
    );
};

export default CategoriaList;
