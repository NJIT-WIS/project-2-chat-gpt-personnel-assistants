
import {
  
  DiscordLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIco

} from "@radix-ui/react-icons";
import Link from 'next/link';
export default function Footer() {
  
return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link href="/about">
              <div className="text-base leading-6 text-gray-500 hover:text-gray-900">
                About
              </div>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/privacy">
              <div className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Privacy
              </div>
            </Link>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <Link href="#">
            <div className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">mywebclass instagram link </span>
              <InstagramLogoIcon />
            </div>
          </Link>
          <Link href="#">
            <div className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">mywebclass twitter link </span>
              <TwitterLogoIcon />
            </div>
          </Link>
          <Link href="#">
            <div className="text-gray-400 hover:text-gray-500">
            < GitHubLogoIcon />
            <span className="sr-only">Checkout MyWebClass Github repository </span>
            </div>
          </Link>
          <Link href="#">
            <div className="text-gray-400 hover:text-gray-500">
              <DiscordLogoIcon />
              <span className="sr-only">join My Web Class Discord </span>
            </div>
          </Link>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2021 MyWebClass, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
  
}
