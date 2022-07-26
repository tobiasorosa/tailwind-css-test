import { gql } from '@apollo/client';

export const SeoFragment = `
fragment SeoFragment on PostTypeSEO {
  breadcrumbs {
    text
    url
  }
  canonical
  title
  metaDesc
  metaRobotsNoindex
  metaRobotsNofollow
  opengraphAuthor
  opengraphDescription
  opengraphUrl
  opengraphTitle
  opengraphImage {
    sourceUrl
    mediaDetails {
      height
      width
    }
  }
  opengraphSiteName
  opengraphPublishedTime
  opengraphModifiedTime
  twitterTitle
  twitterDescription
  twitterImage {
    sourceUrl
  }
  schema {
    raw
  }
}
`;

export const ImageFragment = `
fragment ImageFragment on MediaItem {
	sourceUrl
	altText
}
`;

export const MenuFragment = `
fragment MenuFragment on MenuItem {
  id
  label
  url
  path
}
`;

export const MegaMenuFragment = `
menus(first: 1000) {
  edges {
    node {
      id
      name
      menuItems(first: 1000) {
        edges {
          node {
            id
            url
            label
            parentId
          }
        }
      }
      locations
    }
  }
}
`;

export const GET_PAGE = gql`
  query GET_PAGE($uri: String) {
    page: pageBy(uri: $uri) {
      id
      pageId
      slug
      uri
      link
      status
      isRestricted
      date
      modified
      title
      bannerPaginasInternas {
        subtitulo
      }
      content
      seo {
        ...SeoFragment
      }
      saswpSchema {
        json_ld
      }
      featuredImage {
        node {
          ...ImageFragment
        }
      }
    }
    ${MegaMenuFragment}
  }
  ${SeoFragment}
  ${ImageFragment}
`;
