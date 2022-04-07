import Blog from '@/components/Blog'
import Hero from '@/components/Hero'
import PageContainer from '@/components/PageContainer'
import Projects from '@/components/Projects'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Hero />
      <Blog />
      <Projects />
    </PageContainer>
  )
}

export default Home
