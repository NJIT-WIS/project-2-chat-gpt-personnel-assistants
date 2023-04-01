import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Button from "@mui/material/Button";
import styles from "../styles/Layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "[Your Name]";
export const siteTitle = "MyWebClass.org";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Jonathan Grossman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{siteTitle}</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/addBlog">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
            <h3 className={utilStyles.headingLg}>
              <Link href="/Subscribe" className={utilStyles.colorInherit}>
                <Button variant="contained" color="secondary">
                  Join our Mailing List
                </Button>
              </Link>
            </h3>
            <h3 className={utilStyles.headingLg}>
              <Link href="/addBlog" className={utilStyles.colorInherit}>
                <Button variant="contained" color="secondary">
                  Create a new blog post!!
                </Button>
              </Link>
            </h3>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to homes</Link>
        </div>
      )}
    </div>
  );
}
