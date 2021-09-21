import { useQuery } from "@apollo/client"
import { IPostList } from "../interfaces"
import { POST_WITH_COMMENTS_QUERY } from "../queries"

export const usePostInfo = (id: string, options?: any) => {
  return useQuery<{ postsList: IPostList }>(POST_WITH_COMMENTS_QUERY, {
    ...options,
    variables: { ...options?.variables, id },
  })
}
