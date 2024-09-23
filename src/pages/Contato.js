import React from 'react'

export default function Contato() {
  return (
    <div class="container-fluid  mt-5 pt-5 py-2 d-flex justify-content-center">
        <div id="contact-form" class="col-12 col-sm-8 col-md-6">
        <h1 class="tit-box-2 mb-5">Entre em contato</h1>
        <form method='POST'>

            <div class="form mb-3">
            <label for="nome" class="form-label">Nome Completo</label>
            <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome Sobrenome"/>
            </div>

            <div class="form mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="usuario@contato.im"/>
            </div>

            <div class="form mb-3">
                <label for="telf" class="form-label">Telefone</label>
                <input type="telf" class="form-control" id="telf" name="telf" placeholder="(11) 98765 4321"/>
            </div>

            <div class="form mb-3">
            <label for="mensagem" class="form-label">Mensagem</label>
            <textarea type="text" class="form-control" id="mensagem" name="mensagem" rows="2" placeholder="Texto"></textarea>
            </div>

            <div class="form form-check mb-5">
            <input class="form-check-input" type="checkbox" value="" id="infos"/>
            <label class="form-check-label" for="infos">
                Acepto o envio de informações sobre ofertas e novos lançamentos
            </label>
            </div>

            <div className="text-center">
              <input id="btn-prod-2" name="criar" type="submit" class="btn btn-outline-dark fs-5 me-2" value="Enviar"/>
            </div>
        </form>
        </div> 
    </div>
  )
}
