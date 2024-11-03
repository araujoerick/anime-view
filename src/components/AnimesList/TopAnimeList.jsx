import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../UI/Card'

const TopAnimeList = () => {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    request('https://api.jikan.moe/v4/top/anime')
  }, [request])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (data) {
    return (
      <>
        <h1 className="text-5xl">Jikan API </h1>
        <div className="flex flex-wrap gap-3">
          {data.data.map(anime => {
            const {
              mal_id,
              title,
              title_english,
              images,
              duration,
              episodes,
              score,
              type,
            } = anime
            return (
              <Card
                key={mal_id}
                title={title || title_english}
                imgUrl={images.webp.image_url}
                duration={duration}
                episodes={episodes}
                score={score}
                type={type}
              />
            )
          })}
        </div>
      </>
    )
  }
}

export default TopAnimeList
