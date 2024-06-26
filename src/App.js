import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Importa o ícone de menu sanduíche
import UsuarioForm from './components/Usuario/UsuarioForm';
import CarrinhoForm from './components/Carrinho/CarrinhoForm';
import CategoriaForm from './components/Categoria/CategoriaForm';
import AvaliacaoForm from './components/Avaliacao/AvaliacaoForm';
import PagamentoForm from './components/Pagamento/PagamentoForm';
import PedidoForm from './components/Pedido/PedidoForm';
import './App.css'; // Importa arquivo de estilos CSS

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Router>
            <div className={`app-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
                <nav className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="sidebar-header">
                        <button className="sidebar-toggle" onClick={toggleSidebar}>
                            <FaBars />
                        </button>
                        <h2>Menu</h2>
                    </div>
                    <ul>
                        <li><Link to="/usuario">Cadastro de Usuário</Link></li>
                        <li><Link to="/carrinho">Cadastro de Carrinho</Link></li>
                        <li><Link to="/categoria">Cadastro de Categoria</Link></li>
                        <li><Link to="/avaliacao">Cadastro de Avaliação</Link></li>
                        <li><Link to="/pagamento">Cadastro de Pagamento</Link></li>
                        <li><Link to="/pedido">Cadastro de Pedido</Link></li>
                    </ul>
                </nav>

                <main className="main-content">
                    <Routes>
                        <Route path="/usuario" element={<UsuarioForm />} />
                        <Route path="/carrinho" element={<CarrinhoForm />} />
                        <Route path="/categoria" element={<CategoriaForm />} />
                        <Route path="/avaliacao" element={<AvaliacaoForm />} />
                        <Route path="/pagamento" element={<PagamentoForm />} />
                        <Route path="/pedido" element={<PedidoForm />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
