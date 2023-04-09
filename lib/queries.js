const postFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  markdown,
  "slug": slug.current,
  "author": author->{name, picture},
`;

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

const heroFields = `
  _id,
  title,
  subtitle,
  "backgroundImage": backgroundImage.asset->url,
  ctaText,
  ctaLink
`;

export const heroQuery = `
*[_type == "hero"] | order(_createdAt desc) {
  ${heroFields}
}`;

export const heroBySlugQuery = `
*[_type == "hero" && slug.current == $slug][0] {
  ${heroFields}
}
`;

export const heroSlugsQuery = `
*[_type == "hero" && defined(slug.current)][].slug.current
`;
