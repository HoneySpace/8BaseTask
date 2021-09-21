import { useQuery } from "@apollo/client"
import { IComment, IPostList } from "../interfaces"
import { ADD_COMMENT_QUERY } from "../queries"

export const useAddComment = (text: string, id: string, options?: any) => {
  return useQuery<{ commentCreate: IComment }>(ADD_COMMENT_QUERY, {
    ...options,
    variables: { ...options?.variables, id, text },
  })
}
