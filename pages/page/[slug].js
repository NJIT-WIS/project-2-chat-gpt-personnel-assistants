import { useRouter } from "next/router";
import { getClient } from "../../lib/sanity";
import { pageBySlugQuery } from "../../lib/queries";
import HeroComp from "../../components/hero";
import RichText from "../../components/RichText";
import Menu from "../../components/menu";
import Container from "../../components/container";
import PostComponent from "../../components/PostComponent";
import MoreStories from "../../components/more-stories";
import Markdown from "../../components/markdown";
import PostBody from "../../components/post-body";

// TODO need to define about component, about component doesn't exist yet
// create a display content component
// need a generalized page framework for every page
// only change the content of the page

// the following query is used to generate the paths for the static pages
export default function Page({ pageData }) {
  // the router is used to get the slug of the current page
  const router = useRouter();
  console.log(Object.keys(pageData.content));
  const markdownBody=pageData.content.Markdown;
  // if the page is not yet generated, this will be displayed
  if (!pageData) {
    return <div>Loading...</div>;
  }
  // if the generated page is not found, this will be displayed
  return (
    <div className="min-h-screen">
      <Container>
        {pageData.menu && <Menu data={pageData.menu} />}
        {pageData.hero && (
          <HeroComp
            title={pageData.hero.title}
            subtitle={pageData.hero.subtitle}
            backgroundImage={pageData.hero.backgroundImage}
            ctaText={pageData.hero.ctaText}
            ctaLink={pageData.hero.ctaLink}
          />
        )}

       
          
        
<PostBody
                content={markdownBody}
              />
     
      </Container>
      <Container>
      <PostBody
                content={markdownBody}
              />

      </Container>
    </div>
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
