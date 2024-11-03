import React from 'react'
import Button from '../UI/Button'
import iconPlay from '../../assets/icons/icon-play.svg'
import iconPlus from '../../assets/icons/icon-plus.svg'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import dayjs from 'dayjs'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules'

const getRecentAnime = async () => {
  const response = await axios.get(
    'https://kitsu.io/api/edge/anime?filter[status]=current&sort=-averageRating'
  )
  return response.data
}

const Hero = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['recentAnime'],
    queryFn: getRecentAnime,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5,
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (data) {
    return (
      <>
        <Swiper
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            clickable: true,
            type: 'progressbar',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          effect={'fade'}
          style={{
            '--swiper-pagination-color': '#f57c00',
            // '--swiper-pagination-bullet-size': '15px',
          }}
        >
          {data.data.map(anime => {
            const {
              titles,
              coverImage,
              posterImage,
              synopsis,
              episodeLength,
              showType,
              createdAt,
            } = anime.attributes

            const formatedDate = dayjs(createdAt)

            return (
              <SwiperSlide className="relative max-h-max" key={anime.id}>
                <img
                  className="h-[600px] min-w-full object-cover right-0"
                  src={coverImage ? coverImage.original : posterImage.original}
                  alt={titles.en || titles.en_jp}
                />
                <div className="absolute top-0 h-full w-full flex flex-col justify-end gap-7 pt-36 pb-16 px-8 bg-gradient-to-r from-black from-25% bg-black bg-opacity-10">
                  <div>
                    <h1 className="text-5xl font-semibold max-w-[35ch] text-balance">
                      {titles.en || titles.en_jp}
                    </h1>
                  </div>
                  <div>
                    <ul className="flex gap-6">
                      <li>
                        {showType === 'TV' ? `${showType} Séries` : showType}
                      </li>
                      <li>{episodeLength} min</li>
                      <li>{formatedDate.format('DD MMM YYYY')}</li>
                    </ul>
                  </div>
                  <p className="max-w-[55ch] text-balance min-h-28">
                    {synopsis.length > 350
                      ? `${synopsis.slice(0, 300)}...`
                      : synopsis}
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
              </SwiperSlide>
            )
          })}

          <div className="swiper-button-next text-orange-600 hover:text-orange-500 right-5 w-auto after:hidden">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>next button</title>
              <circle cx="32" cy="32" r="32" fill="currentColor" />
              <path
                d="M36.5331 29.1733L30.4131 23.0533C30.1633 22.805 29.8253 22.6656 29.4731 22.6656C29.1208 22.6656 28.7829 22.805 28.5331 23.0533C28.4081 23.1773 28.3089 23.3248 28.2412 23.4872C28.1735 23.6497 28.1387 23.824 28.1387 24C28.1387 24.176 28.1735 24.3503 28.2412 24.5128C28.3089 24.6753 28.4081 24.8227 28.5331 24.9467L34.6664 31.0533C34.7914 31.1773 34.8906 31.3248 34.9583 31.4872C35.026 31.6497 35.0608 31.824 35.0608 32C35.0608 32.176 35.026 32.3503 34.9583 32.5128C34.8906 32.6753 34.7914 32.8227 34.6664 32.9467L28.5331 39.0533C28.282 39.3027 28.1402 39.6415 28.139 39.9953C28.1377 40.3491 28.2771 40.6889 28.5264 40.94C28.7757 41.1911 29.1145 41.3328 29.4684 41.3341C29.8222 41.3353 30.162 41.196 30.4131 40.9467L36.5331 34.8267C37.2821 34.0767 37.7029 33.06 37.7029 32C37.7029 30.94 37.2821 29.9233 36.5331 29.1733V29.1733Z"
                fill="white"
              />
            </svg>
          </div>
        </Swiper>
      </>
    )
  }
}

export default Hero
