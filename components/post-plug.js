import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";
import ShareButtons from "./SocialShareButtons";

export default function PostPlug({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="flex flex-col rounded overflow-hidden shadow-lg h-full">
      
      <CoverImage slug={slug} title={title} image={coverImage}   author={author} />
      <div className="flex flex-col flex-grow px-6 py-4">
        <div className="font-bold text-xl mb-2">
        
            {title}
          
        </div>
        <p className="flex-grow text-gray-700 text-base">{excerpt}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
 
        {author && <Avatar name={author.name} picture={author.picture} />}
        <div className="flex items-center">
         
         <Link href={`/posts/${slug}`}
           className="linear flex flex-row items-center rounded-xl bg-gray-100 px-4 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 ml-auto mr-auto"
           data-ripple-light
         >
           Read more
         </Link>
    
       </div>
      </div>
    </div>
  );
}
