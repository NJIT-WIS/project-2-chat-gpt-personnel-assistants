import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import  HeroCoverImage from '../components/heroCoverImage';
import Link from 'next/link';

export default function HeroPost({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <section className="relative">
      <div className="mb-8 md:mb-16">
        < HeroCoverImage slug={slug} title={title} image={coverImage} priority />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4">
          <h3 className="text-4xl leading-tight lg:text-6xl text-white">
            <Link href={`/posts/${slug}`} passHref>
              <span className="cursor-pointer hover:underline">{title}</span>
            </Link>
          </h3>
        </div>
      </div>
      <div className="mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 md:mb-28">
        <div>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  );
}
