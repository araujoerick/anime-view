import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

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
      <div>
        <h1 className="text-5xl">Kitsu API </h1>
        {data.data.map(anime => (
          <p key={anime.id}>
            {anime.attributes.titles.en || anime.attributes.titles.en_jp}
          </p>
        ))}
      </div>
    )
  }
}

export default TrendAnimeList
