import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TopAnimeList from './TopAnimeList'
import TrendAnimeList from './TrendAnimeList'

const queryClient = new QueryClient()

const MainContainer = () => {
  return (
    <>
      <main className="max-w-7xl px-8 m-auto">
        <QueryClientProvider client={queryClient}>
          <TrendAnimeList />
        </QueryClientProvider>
        <TopAnimeList />
      </main>
    </>
  )
}

export default MainContainer
