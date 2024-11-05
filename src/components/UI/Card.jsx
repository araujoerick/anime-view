import React from 'react'
import iconStar from '../../assets/icons/icon-star.svg'

const Card = ({ title, imgUrl, duration, episodes, score, type, ...props }) => {
  return (
    <div className="relative pb-10 w-max" {...props}>
      <img className="rounded max-w-full" src={imgUrl} alt={title} />
      <div className="absolute top-0 bg-gradient-to-t from-black from-20% via-transparent flex flex-col justify-end h-full w-full p-3 gap-1 rounded">
        <div className="flex justify-between mb-1">
          {episodes && (
            <p className="bg-neutral-500 text-sm px-3 py-0.5 rounded">
              Ep: {episodes}
            </p>
          )}

          {duration && (
            <p className="bg-orange-600 text-sm px-3 py-0.5 rounded">
              {duration
                .split('')
                .filter(n => Number(n) || n === false)
                .join('')}
              m
            </p>
          )}
        </div>

        <h3 className="text-lg leading-6 font-light min-h-12">
          {title.length > 30 ? `${title.slice(0, 30)}...` : title}
        </h3>

        <div className="flex font-light text-xs gap-2 justify-between">
          {type && <p>{type}</p>}

          {score && (
            <p className="flex items-center gap-1">
              <img className="h-[10px]" src={iconStar} alt="" />
              {score}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
