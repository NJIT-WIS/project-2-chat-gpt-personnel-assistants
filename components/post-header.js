import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import Image from "next/image";
import { urlForImage } from "../lib/sanity";
import ShareButtons from "./SocialShareButtons";
export default function PostHeader({ date, author ,slug}) {
  return (
    
    <div className="flex items-center">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image
              src={
                author.picture?.asset?._ref
                  ? urlForImage(author.picture)
                      .height(96)
                      .width(96)
                      .fit("crop")
                      .url()
                  : "https://source.unsplash.com/96x96/?face"
              }
              className="rounded-full"
              height={96}
              width={96}
              alt={author.name}
            />
          </div>
          <div className="text-gray-600 ml-4">
            <div>
              Posted by <strong>{author.name}</strong>
            </div>
            <time className="text-gray-500 dark:text-gray-400">
              <Date dateString={date} />
            </time>
          </div>
        </div>
        <ShareButtons slug={slug} />
      </div>
    </div>
  );
}
