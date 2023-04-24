import { indexQuery, heroQuery } from '../lib/queries'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'
import Landing from '../components/landing'
import { pageBySlugQuery } from "../lib/queries";
import Page from "../components/page";
const LandingPreview = lazy(() => import('../components/landing-preview'))

export default function IndexPage({ Hero, allPosts, pageData, preview }) {

  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <LandingPreview allPosts={allPosts} />
      </PreviewSuspense>
    )
  }
  // this is the page component that will be used to render the page
  // called by the page/[slug] component
  return <Page pageData={pageData} Hero={Hero} HeroShow={true} allPosts={allPosts}/>
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  const Hero = overlayDrafts(await getClient(preview).fetch(heroQuery));
  const slug = "home";
  const pageData = await getClient(preview).fetch(pageBySlugQuery, { slug });


  return {
    props: { allPosts, Hero, pageData, preview },


  
    // If webhooks isn't setup then attempt to re-generate in 1-minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}