import { indexQuery, heroQuery } from '../lib/queries'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'
import Layout from '../components/layout'
import { pageBySlugQuery, contentBySlugQuery } from '../lib/queries'
import Page from '../components/page'
const LandingPreview = lazy(() => import('../components/landing-preview'))

export default function IndexPage({ Hero, allPosts, pageData, preview, privacy }) {
  const metaData = pageData.seo;
  const footer = pageData.footer;
  const menu = pageData.menu;
  
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <LandingPreview allPosts={allPosts} />
      </PreviewSuspense>
    )
  }
  // this is the page component that will be used to render the page
  // called by the page/[slug] component
  return (
    <Layout menuData={menu} metaData={metaData} footerData={footer} privacy={privacy}>
      <Page pageData={pageData} Hero={Hero}  allPosts={allPosts} />
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))
  const Hero = overlayDrafts(await getClient(preview).fetch(heroQuery))
  const slug = 'home'
  const pageData = await getClient(preview).fetch(pageBySlugQuery, { slug })
  const privacy = await getClient(preview).fetch(contentBySlugQuery, {
    slug: 'privacy-content',
  })

  return {
    props: { allPosts, Hero, pageData, privacy, preview },

    // If webhooks isn't setup then attempt to re-generate in 1-minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}
