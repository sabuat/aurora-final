import React from 'react'
import Paragrafo from '../components/Paragrafo'
import '../styles/Sobre.css'

const parrafos = [
  {parte:"Aurora Perfumes é um empreendimento novo, apaixonado por perfumes, dedicado a trazer para você uma ampla variedade de fragrâncias nacionais e importadas."},
  {parte: "Além de oferecer uma coleção diversificada de perfumes em frascos originais, também somos especializados em decants.Decants são pequenas porções de perfume retiradas de frascos maiores e embaladas em recipientes menores, permitindo que você experimente uma variedade de fragrâncias sem o compromisso de comprar um frasco completo."}
]
  

export default function Sobre() {
  return (
    <div>
       {parrafos.map((parrafo) => 
          <Paragrafo contenido={parrafo.parte}/>
       )}
    </div>
  )
}

