import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const TopAnimeList = () => {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    request('https://api.jikan.moe/v4/top/anime')
  }, [request])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (data) {
    return (
      <div>
        <h1 className="text-5xl">Jikan API </h1>
        {data.data.map(anime => (
          <p key={anime.mal_id}>{anime.title}</p>
        ))}
      </div>
    )
  }
}

export default TopAnimeList
