import { useState } from "react";
import ListaSimples from "../components/ListaSimples";

export default function About() {
    const [topicos, setTopicos] = useState(
        ["História","Missão", "Visão", "Valores"]
    );

    return (
        <div style={{ padding: '0 40px '}}>
            <h1>About Us</h1>
            <p className="lead">Saiba mais sobre nós nesta página.</p>

            <h3>Nossos tópicos importantes:</h3>
            <ListaSimples lista={topicos} />
        </div>
    );
}

