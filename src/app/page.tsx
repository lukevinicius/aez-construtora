'use client'

import 'aos/dist/aos.css'

import { useEffect } from 'react'

import AOS from 'aos'

import { AboutMe } from '@/components/about-me'
import { HomeComponent } from '@/components/home'
import { Services } from '@/components/services'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out-sine',
      delay: 0,
    })
  })

  return (
    <>
      <HomeComponent />
      <AboutMe />
      <Services />
    </>
  )
}
