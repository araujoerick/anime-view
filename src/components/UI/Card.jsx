import React from 'react'

const Card = ({ title, imgUrl, synopsis }) => {
  return (
    <div className="relative pb-10">
      <img className="" src={imgUrl} alt={title} />
      <div className="absolute top-0 bg-gradient-to-t from-black from-10% flex flex-col justify-end h-full">
        <h2>{title}</h2>
        {synopsis && <p>{synopsis.slice(0, 100)}</p>}
      </div>
    </div>
  )
}

export default Card
