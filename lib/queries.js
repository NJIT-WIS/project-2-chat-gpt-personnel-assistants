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
const ContentFields = `
  _id,
 
  title,

 
  markdown,
  "slug": slug.current,

`;
const menuFields = `
  _id,
  title,
  "items": items[]{
    title,
    link,
    "submenu": submenu[]{
      title,
      link
    }
  }
`;
const pageFields = `
  _id,
  title,
  "slug": slug.current,
  "hero": hero->{_id, title, subtitle, "backgroundImage": backgroundImage.asset->url, ctaText, ctaLink},
  "menu": menu->{_id, title, "items": items[]{title, link, "submenu": submenu[]{title, link}}},
  "content": content->{
    title,
    "slug": slug.current,
    markdown
  }
`;

export const pageBySlugQuery = `
*[_type == "page" && slug.current == $slug][0] {
  ${pageFields},
  "posts": posts[]->{
    ${postFields}
  }
}
`;



export const pageSlugsQuery = `
*[_type == "page" && defined(slug.current)][].slug.current
`;

export const allPagesQuery = `
*[_type == "page"] {
  ${pageFields}
}
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
export const allMenusQuery = `
*[_type == "menu"] {
  ${menuFields}
}
`;

export const menuBySlugQuery = `
*[_type == "menu" && slug.current == $slug][0] {
  ${menuFields}
}
`;

export const menuSlugsQuery = `
*[_type == "menu" && defined(slug.current)][].slug.current
`;