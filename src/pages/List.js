import React, { useState } from 'react';
import ListaSimples from "../components/ListaSimples";

export default function List() {
    const [lista, setLista] = useState([]);
    const [itemAtual, setItemAtual] = useState('');

    const adicionarItem = (e) => {
        e.preventDefault(); 
        if (itemAtual.trim() !== '') {
            setLista([...lista, itemAtual]);
            setItemAtual('');
        }
    };

    const removerItem = (index) => {
        const novaLista = [...lista];
        novaLista.splice(index, 1);
        setLista(novaLista);
    };

    return (
        <div style={{ padding: '0 40px' }}>
            <h1>Lista de Itens</h1>
            <form onSubmit={adicionarItem}>
                <input
                    type="text"
                    value={itemAtual}
                    onChange={(e) => setItemAtual(e.target.value)}
                    placeholder="Adicionar item"
                    style={{ marginRight: '5px' }}
                />
                <button type="submit">
                    <i className="fa-sharp fa-solid fa-plus fa-2xs" style={{ color: '#ff0505' }}></i>
                </button>
            </form>
            <ListaSimples lista={lista} remover={removerItem} />
        </div>
    );
}