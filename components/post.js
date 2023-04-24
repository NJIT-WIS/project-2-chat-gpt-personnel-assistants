import { useRouter } from "next/router";
import { urlForImage } from "../lib/sanity";
import ErrorPage from "next/error";
import Layout from "./layout";
import PostTitle from "./post-title";
import Head from "next/head";
import PostBody from "./post-body";
import SectionSeparator from "./section-separator";
import MoreStories from "./more-stories";
import Date from "../components/date";
import Image from "next/image";
import ShareButtons from "./SocialShareButtons";
import PostHeader from "./post-header";
export default function Post({ data = {}, preview = false }) {
  const router = useRouter();

  const { post, morePosts } = data;
  const slug = post?.slug;
  const metaData = post?.seo;

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      metaData={metaData}
      menuData={data.menu}
      preview={preview}
      footerData={data.footer}
    >
      <div className="container max-w-6xl px-6 pt-10 mx-auto md:py-20">
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <div className="container max-w-3xl px-6 mx-auto my-10 md:my-18">
              <PostTitle>{post.title}</PostTitle>
                <Head>
                  {post.coverImage?.asset?._ref && (
                    <meta
                      key="ogImage"
                      property="og:image"
                      content={urlForImage(post.coverImage)
                        .width(500)
                        .height(250)
                        .fit("crop")
                        .url()}
                    />
                  )}
                </Head>
                <div className="prose">
                 <PostHeader date={post.date} author={post.author} slug={slug}/>
                  <Image
                    src={urlForImage(post.coverImage)
                      .height(600)
                      .width(1200)
                      .url()}
                    width={1200}
                    height={600}
                    alt={`Cover Image for ${post.title}`}
                    object-fit="cover"
                    className="rounded-lg mt-8"
                  />
                  <PostBody content={post.markdown} />
                </div>
              </div>
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </div>
    </Layout>
  );
}
