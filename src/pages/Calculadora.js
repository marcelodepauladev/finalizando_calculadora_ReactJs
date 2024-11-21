import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Swal from 'sweetalert2';

export default function Calculadora() {
    const [display, setDisplay] = useState(''); 

    const manipularCliqueBotao = (valor) => {
        if (valor === '=') {
            try {
                setDisplay(evaluate(display).toString()); 
            } catch {
                setDisplay('Erro');
            }
        } else if (valor === 'C') {
            if (display !== '') {
                Swal.fire({
                    title: 'Você tem certeza?',
                    text: "Isso vai apagar tudo!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Sim, apagar!',
                    cancelButtonText: 'Cancelar',
                }).then((resultado) => {
                    if (resultado.isConfirmed) {
                        setDisplay(''); 
                    }
                });
            }
        } else {
            setDisplay(display + valor); 
        }
    };

    const botoes = [
        ['1', '2', '3', '+'],
        ['4', '5', '6', '-'],
        ['7', '8', '9', '*'],
        ['.', '0', '=', '/', 'C'],
    ];

    return (
        <div className="container mt-5" style={{ userSelect: "none" }}>
            <h1>Calculadora</h1>
            <p className="lead">Vamos fazer algumas contas 😎</p>
            <div className="card">
                <div className="card-body">
                    <div className="d-grid gap-2">
                        {botoes.map((linha, indiceLinha) => (
                            <div key={indiceLinha}>
                                {linha.map((valor) => (
                                    <button
                                        style={{ margin: '5px 5px', borderColor: 'black', borderStyle: 'solid' }}
                                        key={valor}
                                        onClick={() => manipularCliqueBotao(valor)}
                                        className="btn btn-secondary btn-lg mb-2">
                                        {valor}
                                    </button>
                                ))}
                                <br />
                            </div>
                        ))}
                    </div>
                    <div className="form-control mb-3 text-end" style={{ width: '30%', borderColor: 'black', borderStyle: 'solid' }}>
                        {display} 
                    </div>
                </div>
            </div>
        </div>
    );
}
