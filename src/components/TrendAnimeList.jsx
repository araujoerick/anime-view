import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Card from './UI/Card'

const fetchTrendAnime = async () => {
  const response = await axios.get('https://kitsu.io/api/edge/trending/anime')
  return response.data
}

const TrendAnimeList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['trendAnime'],
    queryFn: fetchTrendAnime,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5,
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (data) {
    return (
      <>
        <h1 className="text-5xl">Kitsu API </h1>
        <div className="flex flex-wrap gap-3">
          {data.data.map(anime => {
            const { titles, posterImage, synopsis } = anime.attributes
            return (
              <Card
                key={anime.id}
                title={titles.en || titles.en_jp}
                imgUrl={posterImage.small}
                synopsis={synopsis}
              />
            )
          })}
        </div>
      </>
    )
  }
}

export default TrendAnimeList
