import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TopAnimeList from './TopAnimeList'
import TrendAnimeList from './TrendAnimeList'
import Hero from './Hero'

const queryClient = new QueryClient()

const MainContainer = () => {
  return (
    <>
      <main className="max-w-[1440px] px-8 m-auto">
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
