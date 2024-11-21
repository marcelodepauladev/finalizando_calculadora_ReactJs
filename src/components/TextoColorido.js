function TextoColorido({cor, children}) {
    return (
        <p style={{color: cor}}>{ children }</p>
    )
}

export default TextoColorido;