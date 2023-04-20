import { useRouter } from "next/router";
import { urlForImage } from "../lib/sanity";
import ErrorPage from "next/error";
import Layout from "./layout";
import Container from "./container";
import PostContainer from "./PostContainer";
import Header from "./header";
import PostTitle from "./post-title";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import PostHeader from "./post-header";
import PostBody from "./post-body";
import SectionSeparator from "./section-separator";
import MoreStories from "./more-stories";

export default function Post({ data = {}, preview = false }) {
  const router = useRouter();

  const { post, morePosts } = data;
  const slug = post?.slug;
  const metaData = post?.seo;
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout metaData={metaData} menuData={data.menu} preview={preview}>
      <PostContainer>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
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
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
               
              />
              <PostBody content={post.markdown} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </PostContainer>
    </Layout>
  );
}
