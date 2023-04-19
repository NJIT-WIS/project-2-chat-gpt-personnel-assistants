import { useRouter } from "next/router";
import { getClient } from "../../lib/sanity";
import { pageBySlugQuery } from "../../lib/queries";
import HeroComp from "../../components/hero";

import Menu from "../../components/menu";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import AllContent from "../../components/content";

import PortableTextComponent from '../../components/PortableText';
import Layout from "../../components/layout";
// TODO need to define about component, about component doesn't exist yet
// create a display content component
// need a generalized page framework for every page
// only change the content of the page

// the following query is used to generate the paths for the static pages
export default function Page({ pageData, allPosts }) {
  // the router is used to get the slug of the current page
  const router = useRouter();

  const content = pageData.content;
  const posts = allPosts || [];
  const menu=pageData.menu;
  // if the page is not yet generated, this will be displayed
  if (!pageData) {
    return <div>Loading...</div>;
  }
  // if the generated page is not found, this will be displayed
  return (
    <Layout menuData={menu}>
      <Container>
  
        {pageData.hero && (
          <HeroComp
            title={pageData.hero.title}
            subtitle={pageData.hero.subtitle}
            backgroundImage={pageData.hero.backgroundImage}
            ctaText={pageData.hero.ctaText}
            ctaLink={pageData.hero.ctaLink}
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
