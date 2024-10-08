import React, { useState } from 'react';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telf, setTelf] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = '5511913586635'; // Your WhatsApp number (with country code, no + sign)
    
    // Construct the WhatsApp message
    const whatsappMessage = `Nome: ${nome}%0AEmail: ${email}%0ATelefone: ${telf}%0AMensagem: ${mensagem}`;

    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Redirect to WhatsApp with pre-filled message
    window.location.href = whatsappUrl;
  };

  return (
    <div className="container-fluid mt-5 pt-5 py-2 d-flex justify-content-center">
      <div id="contact-form" className="col-12 col-sm-8 col-md-6">
        <h1 className="tit-box-3 mb-5">Formulario de Contato</h1>
        <form onSubmit={handleSubmit}>
          <div className="form mb-3">
            <label htmlFor="nome" className="form-label">Nome Completo</label>
            <input type="text" className="form-control" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome Sobrenome" required />
          </div>

          <div className="form mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="usuario@contato.im" required />
          </div>

          <div className="form mb-3">
            <label htmlFor="telf" className="form-label">Telefone</label>
            <input type="text" className="form-control" id="telf" value={telf} onChange={(e) => setTelf(e.target.value)} placeholder="(11) 98765 4321" required />
          </div>

          <div className="form mb-3">
            <label htmlFor="mensagem" className="form-label">Mensagem</label>
            <textarea className="form-control" id="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} rows="2" placeholder="Texto" required></textarea>
          </div>

          <div className="text-center">
            <input id="btn-prod-2" type="submit" className="btn btn-outline-dark fs-6 me-2" value="Enviar mensagen" />
          </div>
        </form>
      </div>
    </div>
  );
}
