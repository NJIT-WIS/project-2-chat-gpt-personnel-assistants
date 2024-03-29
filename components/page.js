import { useRouter } from 'next/router'

import HeroComp from './hero'

import Container from './container'
import MoreStories from './more-stories'
import AllContent from './content'
import Cookies from 'js-cookie'
import React, { useState, useEffect } from 'react'

import Layout from './layout'
// TODO need to define about component, about component doesn't exist yet
// create a display content component
// need a generalized page framework for every page
// only change the content of the page

// the following query is used to generate the paths for the static pages
export default function Page({ pageData, allPosts, Hero }) {
  // the router is used to get the slug of the current page
  const router = useRouter()
  const [number, setNumber] = useState(null)
  const content = pageData.content
  const posts = allPosts || []
  const menu = pageData.menu
  const heroLength = Hero.length
  const metaData = pageData.seo
  const footer = pageData.footer

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const storedNumber = Cookies.get('number')
    if (storedNumber) {
      setNumber(parseInt(storedNumber, 10))
      setLoading(false)
    } else {
      const newNumber = Math.floor(Math.random() * heroLength)
      Cookies.set('number', newNumber, { expires: 1 })
      setNumber(newNumber)
      setLoading(false)
    }
  }, [heroLength])

  const hero = Hero[number] || []
  // if the page is not yet generated, this will be displayed
  if (loading) {
    return (
      <div>
        <button type="button" className="bg-indigo-500 ..." disabled>
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          Processing...
        </button>
      </div>
    )
  }
  // if the generated page is not found, this will be displayed
  return (
    <Container>
      {!loading && pageData.showHero && (
        <HeroComp
          title={hero.title}
          subtitle={hero.subtitle}
          backgroundImage={hero.backgroundImage}
          ctaText={hero.ctaText}
          ctaLink={hero.ctaLink}
        />
      )}

      {posts.length > 0 ? <MoreStories posts={posts} /> : <AllContent Pagecontent={content} />}
    </Container>
  )
}
