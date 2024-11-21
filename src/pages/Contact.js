import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    //Função para lidar com a submissão do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log("Formulário enviado:", formData);
        //Reset o formulário
        setFormData({
            name: "",
            email: "",
            message: "",
        })
    };

    //Função para lidar com as mudanças nos campos do formulário
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            });
    };

    return (
        <div style={{ padding: '0 40px' }}>
            <h1>Contato</h1>
            <p className="lead">
                Entre em contato conosco preenchendo o formulário abaixo:
            </p>

            {submitted && (
                <div className="alert alert-success" role="alert">
                    Formulário enviado com sucesso
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Mensagem:</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        required 
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </div>
    );
}
