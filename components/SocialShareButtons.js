import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRedditAlien,
} from "react-icons/fa"; // Import social icons
import HoverCard from "./HoverCard";
import React from "react";
import { Link2Icon } from "@radix-ui/react-icons";
export default function ShareButtons({ slug }) {
  const postUrl = encodeURIComponent(`https://www.jgis219.com/posts/${slug}`);

  const title = encodeURIComponent(slug);
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${postUrl}&text=${title}`;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}`;
  const redditShareUrl = `https://www.reddit.com/submit?url=${postUrl}&title=${title}`;
  const copyLink = (url) => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard");
  };
  const openInNewWindow = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex space-x-4">
      <HoverCard label="Share on Facebook">
        <button
          onClick={() => openInNewWindow(facebookShareUrl)}
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <FaFacebookF />
        </button>
      </HoverCard>
      <HoverCard label="Share on Twitter">
        <button
          onClick={() => openInNewWindow(twitterShareUrl)}
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <FaTwitter />
        </button>
      </HoverCard>
      <HoverCard label="Share on LinkedIn">
        <button
          onClick={() => openInNewWindow(linkedInShareUrl)}
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <FaLinkedinIn />
        </button>
      </HoverCard>
      <HoverCard label="Share on Reddit">
        <button
          onClick={() => openInNewWindow(redditShareUrl)}
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <FaRedditAlien />
        </button>
      </HoverCard>
      <HoverCard label="Copy link">
        <button
          onClick={() => copyLink(`https://www.jgis219.com/posts/${slug}`)}
        >
          <Link2Icon className="text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </button>
      </HoverCard>
    </div>
  );
}
