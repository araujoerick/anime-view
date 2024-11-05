import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TopAnimeList from './AnimesList/TopAnimeList'
import TrendingAnime from './AnimesList/TrendingAnime'
import Hero from './Hero/Hero'

const queryClient = new QueryClient()

const MainContainer = () => {
  return (
    <>
      <main className="max-w-8xl px-8 m-auto">
        <QueryClientProvider client={queryClient}>
          <Hero />
          <TrendingAnime />
        </QueryClientProvider>
        <TopAnimeList />
      </main>
    </>
  )
}

export default MainContainer
