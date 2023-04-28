import { lazy } from 'react'
import { PreviewSuspense } from 'next-sanity/preview'
import {
  postQuery,
  postSlugsQuery,
  footerBySlugQuery,
  menuBySlugQuery,
  contentBySlugQuery,
} from '../../lib/queries'
import { getClient, overlayDrafts, sanityClient } from '../../lib/sanity.server'
import Post from '../../components/post'
import Layout from '../../components/layout'
const PostPreview = lazy(() => import('../../components/post-preview'))

export default function PostPage({ preview, data }) {
  const metaData = data?.post?.seo;
  const menu=data?.menu;
  const footer=data?.footer;
  const privacy=data?.privacy;
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <PostPreview data={data} />
      </PreviewSuspense>
    )
  }

  return (
    <Layout menuData={menu} metaData={metaData} footerData={footer} privacy={privacy}>
      <Post data={data} />
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })
  const menu = await getClient(preview).fetch(menuBySlugQuery, {
    slug: 'main-menu',
  })
  const footer = await getClient(preview).fetch(footerBySlugQuery, {
    slug: 'footer',
  })
  const privacy = await getClient(preview).fetch(contentBySlugQuery, {
    slug: 'privacy-content',
  })
  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
        menu,
        footer,
        privacy,
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}
