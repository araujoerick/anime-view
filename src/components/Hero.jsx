import React from 'react'
import HeroImage from '../assets/hero-image.jpeg'
import Button from './UI/Button'
import iconPlay from '../assets/icon-play.svg'
import iconPlus from '../assets/icon-plus.svg'

const Hero = () => {
  return (
    <section className="max-w-7xl px-8 m-auto">
      <div
        style={{ backgroundImage: `url(${HeroImage})` }}
        className="bg-cover bg-center"
      >
        <div className="flex flex-col gap-7 pt-36 pb-16 px-8 bg-gradient-to-r from-black bg-black bg-opacity-10">
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
          <p className="max-w-[60ch] text-balance">
            Eren Jaeger jurou eliminar todos os Titãs, mas em uma batalha
            desesperada ele se torna aquilo que mais odeia. Com seus novos
            poderes, ele luta pela liberdade da humanidade, combatendo os
            monstros que ameaçam seu lar. Mesmo depois de derrotar a Titã Fêmea,
            Eren não consegue descansar - uma horda de Titãs se aproximam da
            Muralha Rose e a batalha em nome da humanidade continua!
          </p>
          <div className="flex gap-5">
            <Button type="button" icon={iconPlay}>
              Assistir
            </Button>
            <Button type="button" variant="secondary">
              <img className="h-3" src={iconPlus} alt="" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
