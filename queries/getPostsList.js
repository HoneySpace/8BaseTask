import { gql } from "@apollo/client"

export const POSTS_QUERY = gql`
  query {
    postsList(sort: { createdAt: DESC }) {
      items {
        id
        title
        tags {
          items {
            name
          }
        }
        createdAt
        thumbnail {
          downloadUrl
        }
      }
    }
  }
`

export const FILTERED_POSTS_QUERY = gql`
  query ($tag: String) {
    postsList(sort: { createdAt: DESC }, filter: { tags: { some: { name: { equals: $tag } } } }) {
      items {
        id
        title
        tags {
          items {
            name
          }
        }
        createdAt
        thumbnail {
          downloadUrl
        }
        comments {
          items {
            content
            createdAt
          }
        }
      }
    }
  }
`
