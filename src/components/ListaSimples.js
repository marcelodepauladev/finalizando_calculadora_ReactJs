function ListaSimples({ lista, remover }) {
    return (
        <ul className="list-group">
            {lista.map((item, index) => (
                <li key={index} style={{ margin: '5px' }}>
                    {item}{" "}
                    <button onClick={() => remover(index)}>Remover</button>
                </li>
            ))}
        </ul>
    );
}

export default ListaSimples;
