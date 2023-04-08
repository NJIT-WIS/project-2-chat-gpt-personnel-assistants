import Layout from './layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Container from './container'
import HeroContainer from './heroContainers'
import Intro from './intro'
import HeroPost from './hero-post'
import MoreStories from './more-stories'
import HeroComp from './hero' // Import the Hero component
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
export default function Landing({ allPosts, Hero, preview }) {
  const [heroPost, ...morePosts] = allPosts || [];
  const [number, setNumber] = useState(null);

  const heroLength = Hero.length;
  
  useEffect(() => {
    const storedNumber = Cookies.get("number");
    if (storedNumber) {
      setNumber(parseInt(storedNumber, 10));
    } else {
      const newNumber = Math.floor(Math.random() * heroLength);
      Cookies.set("number", newNumber, { expires: 1 });
      setNumber(newNumber);
    }
  }, [heroLength]);
  
  const hero = Hero[number] || [];


  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>My Web Class</title>
        </Head>
        <Container>
        <HeroComp 
          title={hero.title}
          subtitle={hero.subtitle}
          backgroundImage={hero.backgroundImage}
          ctaText={hero.ctaText}
          ctaLink={hero.ctaLink}
        />
          </Container>
        {heroPost && (
         <Container>
       
     
       
      
          {morePosts.length >= 0 && <MoreStories posts={morePosts} />}
        </Container>
         )}
      </Layout>
    </>
  )
}
