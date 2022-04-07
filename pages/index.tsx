import Hero from '@/components/Hero'
import PageContainer from '@/components/PageContainer'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Hero />
    </PageContainer>
  )
}

export default Home
