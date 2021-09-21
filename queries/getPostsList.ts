import { gql } from "@apollo/client"

export const POSTS_QUERY = gql`
  query {
    postsList(sort: { createdAt: ${"DESC"} }) {
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

export const FILTERED_POSTS_QUERY = (tags: string[]) => {
  let tagsConditions = ""

  if (tags.length > 0) {
    tags.forEach((tag) => {
      tagsConditions += `{ name: { equals: "${tag}" } }`
    })

    tagsConditions = `, filter: { tags: { some: { OR: [${tagsConditions}] } } }`
  }

  return gql`
    query {
      postsList(sort: { createdAt: DESC }${tagsConditions}) {
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
}
