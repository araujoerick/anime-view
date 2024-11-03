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

import { Pagination, Navigation, Autoplay } from 'swiper/modules'

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
          slidesPerView={1}
          pagination={{
            clickable: true,
            // el: '.swiper-pagination',
            type: 'progressbar',
          }}
          direction="horizontal"
          loop={true}
          autoplay={false}
          modules={[Pagination, Navigation, Autoplay]}
          // navigation={true}
          navigation={{
            nextEl: '.swiper-button-next',
            //   prevEl: '.carousel-control-prev',
          }}
          className=""
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#f57c00',
            '--swiper-pagination-bullet-size': '15px',
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
        </Swiper>
      </>
    )
  }
}

export default Hero
