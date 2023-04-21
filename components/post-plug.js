import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPlug({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="px-5 rounded-lg shadow-lg mb-5   ">
      <div className="mb-5 mt-10">
        <CoverImage slug={slug} title={title} image={coverImage} />
      </div>
      <h2 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h2>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}

