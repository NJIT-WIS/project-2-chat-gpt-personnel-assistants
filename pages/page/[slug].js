import { useRouter } from "next/router";
import { getClient } from "../../lib/sanity";
import { pageBySlugQuery } from "../../lib/queries";
import HeroComp from "../../components/hero";

import Menu from "../../components/menu";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import AllContent from "../../components/content";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import PortableTextComponent from '../../components/PortableText';
import Layout from "../../components/layout";
// TODO need to define about component, about component doesn't exist yet
// create a display content component
// need a generalized page framework for every page
// only change the content of the page

// the following query is used to generate the paths for the static pages
export default function Page({ pageData, allPosts ,Hero}) {
  // the router is used to get the slug of the current page
  const router = useRouter();
  const [number, setNumber] = useState(null);
  const content = pageData.content;
  const posts = allPosts || [];
  const menu=pageData.menu;
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
  // if the page is not yet generated, this will be displayed
  if (!pageData | !hero) {
    return <div>Loading...</div>;
  }
  // if the generated page is not found, this will be displayed
  return (
    <Layout menuData={menu}>
      <Container>
  
        {pageData.hero && (
          <HeroComp
            title={hero.title}
            subtitle={hero.subtitle}
            backgroundImage={hero.backgroundImage}
            ctaText={hero.ctaText}
            ctaLink={hero.ctaLink}
          />
        )}
  
        {posts.length > 0 ? (
          <MoreStories posts={posts} />
        ) : (
          <AllContent Pagecontent={content} />
        )}
      </Container>
    </Layout>
  );
}
// this function gets called at build time
export async function getStaticProps({ params }) {
  const pageData = await getClient().fetch(pageBySlugQuery, {
    slug: params.slug,
  });

  return {
    props: {
      pageData,
    },
    revalidate: 60, // You can adjust the revalidation time as needed
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(pageSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
