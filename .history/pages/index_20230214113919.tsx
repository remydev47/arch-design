import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AboutUs, CTA, Expertise, Hero, Reasons, Services, Stats, Testimonial, Blog, Footer } from '../components'

const Home: NextPage = () => {
  return (
    <div className="py-2">
      <Head>
        <title>Quek2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Hero />
      <AboutUs />
      <Expertise />
      <Services />
      <Stats />
      <CTA />
      <Reasons />
      <Testimonial />
      <Blog />
      <Footer /> */}
    </div>
  )
}

export default Home
