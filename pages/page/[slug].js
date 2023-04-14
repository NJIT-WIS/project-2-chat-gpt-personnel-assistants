import { useRouter } from "next/router";
import { getClient } from "../../lib/sanity";
import { pageBySlugQuery } from "../../lib/queries";
import HeroComp from "../../components/hero";
import RichText from "../../components/RichText";
import Menu from "../../components/menu";
import Container from "../../components/container";
import PostComponent from "../../components/PostComponent";
import MoreStories from "../../components/more-stories";

export default function Page({ pageData }) {
  const router = useRouter();

  if (!pageData) {
    return <div>Loading...</div>;
  }

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
   
       
          < MoreStories posts={pageData.posts}  />
     
      </Container>
    </div>
  );
}

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
