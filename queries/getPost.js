import { gql } from "@apollo/client"

export const POST_WITH_COMMENTS_QUERY = gql`
  query ($id: ID) {
    postsList(sort: { createdAt: DESC }, filter: { id: { equals: $id } }) {
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
        comments(sort: { createdAt: DESC }) {
          items {
            content
            createdAt
          }
        }
      }
    }
  }
`
