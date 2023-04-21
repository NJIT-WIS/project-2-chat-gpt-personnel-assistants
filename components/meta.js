import Head from 'next/head';

export default function Meta(data) {
const metaData=data.metaData;

  return (
    <Head>
      {/* Other meta tags */}
      <title>{metaData.title || ''}</title>
      <meta name="description" content={metaData.description || ''} />
      <meta name="keywords" content={metaData.keywords?.join(', ') || ''} />
      <meta property="og:title" content={metaData.title || ''} />
      <meta property="og:description" content={metaData.description || ''} />
      <meta property="og:type" content={metaData.ogType || ''} />
      <meta property="og:url" content={metaData.ogUrl || ''} />
      <meta property="og:site_name" content={metaData.ogSiteName || ''} />
      <meta property="og:image" content={metaData.image || ''} key="ogImage" />
      <meta name="twitter:card" content={metaData.twitterCard || ''} />
      <meta name="twitter:title" content={metaData.title || ''} />
      <meta name="twitter:description" content={metaData.description || ''} />
      <meta name="twitter:image" content={metaData.image || ''} />
      <meta
        name="robots"
        content={metaData.metaRobots?.join(', ') || 'index, follow'}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      {/* Other tags */}
    </Head>
  );
}
