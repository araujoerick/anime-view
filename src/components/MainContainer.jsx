import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TopAnimeList from './AnimesList/TopAnimeList'
import TrendAnimeList from './AnimesList/TrendAnimeList'
import Hero from './Hero/Hero'

const queryClient = new QueryClient()

const MainContainer = () => {
  return (
    <>
      <main className="max-w-8xl px-8 m-auto">
        <QueryClientProvider client={queryClient}>
          <Hero />
          <TrendAnimeList />
        </QueryClientProvider>
        <TopAnimeList />
      </main>
    </>
  )
}

export default MainContainer
