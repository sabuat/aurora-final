import React from 'react'
import Paragrafo from '../components/Paragrafo'
import parrafos from '../parrafos'
 
export default function Sobre() {
  return (
    <div class="container-fluid mt-5 pt-5">
      <div id="contact-form" class="row justify-content-center">
        <div class="row justify-content-center">
            <h1 class="tit-box-2 mt-5 mb-5">Sobre nós</h1>
        </div>
        <div class="col-12 col-lg-4 animate__animated animate__fadeInRight">
            <img id="im-about-1" class="w-100" src="https://images.unsplash.com/photo-1595425959632-34f2822322ce?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <img id="im-about-2" class="w-100 d-none d-md-block" src="https://images.unsplash.com/photo-1622618991746-fe6004db3a47?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        <div id="container-text-about" class="col-12 col-lg-5 ">
          {parrafos.map((parrafo) => 
            <Paragrafo contenido={parrafo.parte}/>
          )}
        </div>
      </div>
    </div>
  )
}