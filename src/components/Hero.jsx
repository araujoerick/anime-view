import React from 'react'
import HeroImage from '../assets/hero-image.jpeg'

const Hero = () => {
  return (
    <section className="max-w-7xl px-8 m-auto">
      <div
        style={{ backgroundImage: `url(${HeroImage})` }}
        className="bg-cover flex flex-col gap-7 pt-36 pb-16 px-8"
      >
        <div>
          <h1 className="text-6xl font-semibold">Attack On Titan</h1>
          <p className="text-3xl font-semibold mt-5">Seaseon 3</p>
        </div>
        <div>
          <ul className="flex gap-6">
            <li>TV Séries</li>
            <li>23 min</li>
            <li>21 de Abril 2021</li>
          </ul>
        </div>
        <p className="max-w-[60ch]">
          Eren Jaeger jurou eliminar todos os Titãs, mas em uma batalha
          desesperada ele se torna aquilo que mais odeia. Com seus novos
          poderes, ele luta pela liberdade da humanidade, combatendo os monstros
          que ameaçam seu lar. Mesmo depois de derrotar a Titã Fêmea, Eren não
          consegue descansar - uma horda de Titãs se aproximam da Muralha Rose e
          a batalha em nome da humanidade continua!
        </p>
        <div className="flex gap-5">
          <button className="bg-orange-600 px-6 py-3 rounded" type="button">
            ASSISTIR
          </button>
          <button
            className="bg-neutral-300 px-6 py-3 rounded text-neutral-800"
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
