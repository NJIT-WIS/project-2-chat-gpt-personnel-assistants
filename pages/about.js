// about.js
import { aboutQuery } from '../lib/queries';
import { getClient, overlayDrafts } from '../lib/sanity.server';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';
import Page from "./page/[slug]";
import { pageBySlugQuery } from "../lib/queries";
const LandingPreview = lazy(() => import('../components/landing-preview'))


export default function AboutPage({ aboutContent, preview }) {
  
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
      <LandingPreview  allPosts={allPosts} />
      </PreviewSuspense>
    );
  }
  // TODO need to define about component, about component doesn't exist yet
  return <Page pageData={aboutContent}/>
}

export async function getStaticProps({ preview = false }) {
  
    const slug = "about";
    const  aboutContent = await getClient(preview).fetch(pageBySlugQuery, { slug });
   
    console.log(aboutContent.content  );
  return {
    props: { aboutContent, preview },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}