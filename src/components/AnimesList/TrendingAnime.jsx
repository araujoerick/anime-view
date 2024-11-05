import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Card from '../UI/Card'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'

const fetchTrendAnime = async () => {
  const BASE_URL = 'https://api.jikan.moe/v4'
  const response = await axios.get(`${BASE_URL}/top/anime?filter=airing`)
  return response.data
}
const TrendingAnime = () => {
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
        <h1 className="text-5xl">Trending Now</h1>
        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={5}
          // className="mySwiper"
          navigation={true}
        >
          {data.data.map((anime, index) => {
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
              <SwiperSlide
                className="relative max-h-max"
                key={`${mal_id}${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  index
                }`}
              >
                <Card
                  title={title || title_english}
                  imgUrl={images.webp.image_url || images.jpg.image_url}
                  duration={duration || '??'}
                  episodes={episodes || '??'}
                  score={score}
                  type={type === 'TV' ? `${type} Séries` : type}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </>
    )
  }
}

export default TrendingAnime
