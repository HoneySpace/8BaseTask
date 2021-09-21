import { gql } from "@apollo/client"

export const ADD_COMMENT_QUERY = gql`
  mutation ($text: String!, $postId: ID) {
    commentCreate(data: { content: $text, posts: { connect: { id: $postId } } }) {
      createdAt
      content
    }
  }
`
