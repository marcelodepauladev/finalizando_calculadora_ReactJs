import imagem from '../assets/images/miau.PNG'

export default function Home() {
    return (
        <>
            <div style={{ padding: '0 40px'}}>
                <h1>Home Page</h1>
                <p className="lead">Bem-vindo à pagina inicial.</p>
                <img
                    src="/bem-vindo.jpg"
                    alt="Home"
                    className="img-responsive"
                    style={{width: '300px', height: 'auto'}}
                />
                <hr></hr>
                <img
                    src={imagem}
                    alt="Home"
                    className="img-responsive"
                    style={{width: '300px', height: 'auto'}}
                />
            </div>
        </>
    );
}

